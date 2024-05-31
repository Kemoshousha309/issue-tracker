import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const EditIssueBtn = ({id}: {id: string}) => {
  return (
    <Button className="cursor-pointer">
      <Pencil2Icon />
      <Link href={`/issues/edit/${id}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueBtn;
