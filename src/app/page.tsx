import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to the homepage</h1>
      <Button className="cursor-pointer" >
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
);
}
