import { Avatar, Card, Flex, Heading, Table, Text } from "@radix-ui/themes";
import React from "react";
import IssueStatusBadge from "./IssueStatusBadge";
import prisma from "../../../prisma/client";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card >
        <Heading size="4" mb="3" >Latest Issues</Heading>
        <Table.Root>
      <Table.Body>
        {issues.map((issue) => {
          return (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" gap="2" align="start">
                    <Text>{issue.title}</Text>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUser && (
                    <Avatar
                      src={issue.assignedToUser.image!}
                      fallback="?"
                      size="2"
                      radius="full"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
    </Card>
  );
};

export default LatestIssues;


export const dynamic = "force-dynamic"
export const revalidate = 0