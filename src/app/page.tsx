import { revalidatePath } from 'next/cache';
import LatestIssues from "./components/LatestIssues";
import IssuesSummary from './components/IssuesSummary';
import prisma from '../../prisma/client';
import StatusChart from './components/StatusChart';
import { Flex, Grid } from '@radix-ui/themes';
import { Metadata } from 'next';
export default async function Home() {
  const open = await prisma.issue.count({where: {status: "OPEN"}})
  const inProgress = await prisma.issue.count({where: {status: "IN_PROGRESS"}})
  const closed = await prisma.issue.count({where: {status: "CLOSED"}})
  const statues = {open, inProgress, closed}
  return (
    <Grid columns={{initial: "1", md: "2"}} gap="5" >
      <Flex direction="column" gap="4">
      <IssuesSummary {...statues} />
      <StatusChart {...statues} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}
revalidatePath('/')

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of the project issues"
}