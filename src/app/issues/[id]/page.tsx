import React from 'react'
import prisma from '../../../../prisma/client'
import { notFound } from 'next/navigation'

const IssuesPage = async ({params: {id}}:{params: {id: string}}) => {
    if(!parseInt(id)) notFound()
    const issue = await prisma.issue.findUnique({
        where: {id: +id}
    })
    if(!issue) notFound()

  return (
    <div>
      <p>{issue?.title}</p>
      <p>{issue?.description}</p>
      <p>{issue?.status}</p>
      <p>{issue?.createdAt.toDateString()}</p>
    </div>
  )
}

export default IssuesPage
