import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import prisma from "../../../../prisma/client";
import EditIssueBtn from "./_components/EditIssueBtn";
import IssueDetails from "./_components/IssueDetails";

const IssuesPage = async ({ params: { id } }: { params: { id: string } }) => {
  if (!parseInt(id)) notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: +id },
  });
  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", sm: "2" }} gap="3">
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueBtn id={id} />
      </Box>    
    </Grid>
  );
};

export default IssuesPage;
