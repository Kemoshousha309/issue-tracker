import { Status } from '@prisma/client';
import { Card, Flex, Text } from '@radix-ui/themes'
import React from 'react'

interface Props {
  open: number,
  closed: number,
  inProgress: number,
}

const IssuesSummary = ({closed,inProgress,open}: Props) => {
  const containers: {
    label: string;
    count: number;
    status: Status;
  }[] = [
    {label: "Open", status: "OPEN", count: open},
    {label: "Closed", status: "CLOSED", count: closed},
    {label: "In Progress", status: "IN_PROGRESS", count: inProgress},
  ]
  return (
    <Flex gap="4" wrap="wrap">
      {containers.map(({count, label, status}) =>{
        return <Card key={status} >
          <Flex width="90px" direction="column" gap="2">
            <Text size="2" className='font-bold'>{label}</Text>
            <Text className='font-semibold'>{count}</Text>
          </Flex>
           </Card>
      })}
    </Flex>
  )
}

export default IssuesSummary
