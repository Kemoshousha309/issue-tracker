import { Box, Flex, Card } from '@radix-ui/themes'
import { Skeleton } from "@/app/components"

const LoadingPage = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton  />
      <Flex gap="3" className="mb-5">
        <Skeleton width="5rem" />
        <Skeleton width="9rem" />
      </Flex>
      <Card>
        <Skeleton height="5rem" />
      </Card>
    </Box>
  )
}

export default LoadingPage
