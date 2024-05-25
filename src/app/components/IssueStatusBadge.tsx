import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const issueMap: Record<
  Status,
  {
    label: string;
    color: "red" | "green" | "violet";
  }
> = {
  //@ts-ignore
  OPEN: {
    label: "Open",
    color: "red",
  },
  CLOSED: {
    label: "Closed",
    color: "green",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "violet",
  },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return <Badge color={issueMap[status].color} >{issueMap[status].label}</Badge>;
};

export default IssueStatusBadge;
