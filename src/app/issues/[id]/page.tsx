import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import prisma from "../../../../prisma/client";
import EditIssueBtn from "./_components/EditIssueBtn";
import IssueDetails from "./_components/IssueDetails";
import DeleteIssueBtn from "./_components/DeleteBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
        <Flex className="gap-5 max-sm:flex-col max-sm:w-full">
          <EditIssueBtn id={id} />
          <DeleteIssueBtn id={+id} />
        </Flex>
      )}
    </Flex>
  );
};

export default IssuesPage;
