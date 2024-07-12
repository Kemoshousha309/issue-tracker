import { Box, Flex } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import AssignSelect from "./_components/AssignSelect/AssignSelect";
import DeleteIssueBtn from "./_components/DeleteBtn";
import EditIssueBtn from "./_components/EditIssueBtn";
import IssueDetails from "./_components/IssueDetails";
import prisma from "../../../../prisma/client";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { authOptions } from "@/app/api/auth/[...nextauth]/utils";

const IssuesPage = async ({ params: { id } }: { params: { id: string } }) => {
  if (!parseInt(id)) notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: +id },
  });
  if (!issue) notFound();
 
  
  const session = await getServerSession(authOptions);
  return (
    <Flex className="max-md:flex-col" gap="5">
      <Box className="grow">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Flex className="gap-5 flex-col max-sm:w-full">
          <Suspense fallback={<Skeleton width="10rem" height="2rem" />}>
            <AssignSelect issue={issue} />
          </Suspense>
          <EditIssueBtn id={id} />
          <DeleteIssueBtn id={+id} />
        </Flex>
      )}
    </Flex>
  );
};

export default IssuesPage;
