import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import StatusFilter from "./statusFilter";

const IssuesActions = () => {
  return (
    <Flex justify="between">
      <StatusFilter />
      <Button className="cursor-pointer">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssuesActions;
