import { Table } from "@radix-ui/themes";
import prisma from "../../../prisma/client";
import IssuesActions from "./issuesAction";
import {Link, IssueStatusBadge} from "@/app/components"


const IssuesPage = async () => {
  // this is a request 
  const issues = await prisma.issue.findMany();
  return (
    <>
      <IssuesActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="max-md:hidden">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="max-md:hidden">
              Description
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>
                <Link href={`/issues/${issue.id}`}>
                {issue.title}
                </Link>
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
    </>
  );
};

export default IssuesPage;

export const dynamic = 'force-dynamic'
