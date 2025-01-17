import NextLink from "next/link";
import { Link as RadixLink} from "@radix-ui/themes"


const Link = ({href, children}: {href: string, children: React.ReactNode}) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
        <RadixLink >{children}</RadixLink>
    </NextLink>
  )
}

export default Link
