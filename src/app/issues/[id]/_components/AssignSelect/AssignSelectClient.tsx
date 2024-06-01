"use client";

import { assignUser } from "@/app/server/actions";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useFormStatus } from "react-dom";
import Skeleton from "react-loading-skeleton";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  users?: User[];
  issue: Issue;
}

export const AssignSelectClient = ({ users, issue }: Props) => {
  const { id: issueId, assignedToUserId } = issue;
  const { pending } = useFormStatus();

  if (pending) return <Skeleton width="10rem" height="2rem" />;
  return (
    <>
      <Select.Root
        defaultValue={assignedToUserId ? assignedToUserId : "UnAssigned"}
        onValueChange={(v) => {
          //trigger a server action
          assignUser(issueId.toString(), v !== "UnAssigned" ? v : null)
          .then(res => toast.success(res.message))
          .catch(err => {
            toast.error(err.message)
          })
        }}
      >
        <Select.Trigger placeholder="Assign ..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Assign Users to issues</Select.Label>
            <Select.Item value="UnAssigned">UnAssigned</Select.Item>
            {users?.map((user) => {
              return (
                <Select.Item key={user.id} value={user.id}>
                  {user.name}
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};
