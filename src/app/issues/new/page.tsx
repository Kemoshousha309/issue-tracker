import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="space-y-4 max-w-xl">
      <TextField.Root placeholder="Search the docs…" />
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit</Button>
    </div>
  );
};

export default NewIssuePage;
