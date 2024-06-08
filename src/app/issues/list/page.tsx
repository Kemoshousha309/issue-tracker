import { Flex, Table } from "@radix-ui/themes";
import prisma from "../../../../prisma/client";
import IssuesActions from "./issuesAction";
import { Link, IssueStatusBadge } from "@/app/components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import Pagination from "../_components/pagination";

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", className: "max-md:hidden" },
  { label: "Created At", value: "createdAt", className: "max-md:hidden" },
];
const pageSize = 10;
interface Props {
  searchParams: { status: Status; orderBy: keyof Issue; page: string };
}

const IssuesPage = async ({ searchParams }: Props) => {
  const { status, orderBy: orderByValue, page } = searchParams;
  const statusList = Object.values(Status);
  let queryStatus;
  if (statusList.includes(status)) queryStatus = status;
  const currentPage = +page || 1;
  const availableOrders = columns.map((col) => col.value);
  const orderBy = availableOrders.includes(orderByValue)
    ? {
        [orderByValue]: "asc",
      }
    : undefined;
  
  // this is a request
  const issues = await prisma.issue.findMany({
    where: {
      status: queryStatus,
    },
    orderBy,
    // pagination
    skip: (currentPage-1) * pageSize,
    take: pageSize,
  });
  const issuesCount = await prisma.issue.count({
    where: {
      status: queryStatus,
    },
  });
  const session = await getServerSession(authOptions);
  return (
    <Flex gap="4" direction="column">
      {session && <IssuesActions />}
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((col) => {
              return (
                <Table.ColumnHeaderCell key={col.label}>
                  {
                    <NextLink
                      href={{
                        query: {
                          ...searchParams,
                          orderBy: col.value,
                        },
                      }}
                    >
                      {col.label}
                    </NextLink>
                  }
                </Table.ColumnHeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <span className="mx-4 md:hidden mt-2">
                  <IssueStatusBadge status={issue.status} />
                </span>
              </Table.RowHeaderCell>
              <Table.Cell className="max-md:hidden">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="max-md:hidden">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination PageSize={pageSize} currentPage={currentPage} itemsCount={issuesCount} />
    </Flex>
  );
};

export default IssuesPage;

export const dynamic = "force-dynamic";
