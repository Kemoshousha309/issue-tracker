import React from "react";
import IssueForm from "../../_components/IssueForm";
import prisma from "../../../../../prisma/client";
import { notFound } from "next/navigation";

const EditPage = async ({ params: { id } }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: +id,
    },
  });
  if (!issue) notFound();
  return <IssueForm issue={issue} />;
};

export default EditPage;
