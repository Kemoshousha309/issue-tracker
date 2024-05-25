import { Box } from '@radix-ui/themes'
import React from 'react'
import {Skeleton} from "@/app/components"

const IssueFormSkeleton = () => {
  return (
    <Box className=" max-w-xl">
        <Skeleton height="2rem" />
        <Skeleton height="25rem"  className='mb-5'/>
        <Skeleton height="2rem" width="6rem" />
    </Box>
  )
}

export default IssueFormSkeleton