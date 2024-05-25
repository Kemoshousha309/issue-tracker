import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Box, Heading, Flex, Card, Text } from '@radix-ui/themes'
import React from 'react'
import Markdown from 'react-markdown'

const IssueDetails = ({issue}: {issue: Issue}) => {
  return (
    <>
    <Heading className="mb-2">{issue.title}</Heading>
    <Flex gap="3" className="mb-5">
      <IssueStatusBadge status={issue.status} />
      <Text>{issue.createdAt.toDateString()}</Text>
    </Flex>
    <Card className="prose">
      <Markdown>{issue.description}</Markdown>
    </Card>
  </>
  )
}

export default IssueDetails
