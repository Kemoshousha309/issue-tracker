import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuesActions = () => {
  return (
    <div className="mb-5">
        <Button className="cursor-pointer">
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
  )
}

export default IssuesActions
