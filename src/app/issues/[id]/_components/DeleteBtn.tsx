"use client";
import { AlertDialog, Button, Flex, Spinner } from "@radix-ui/themes";
import React, { useState } from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import delay from "delay";

const DeleteIssueBtn = ({ id }: { id: number }) => {
  const router = useRouter();
  const [err, setErr] = useState(false)
const [isDeleting, setIsDeleting] = useState(false)

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button disabled={isDeleting} color="red">
            <TrashIcon />
            Delete Issue
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Confirm Delete</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? You want to delete this issue
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                onClick={async () => {
                  try {
                    setIsDeleting(true)
                    await delay(2000)
                    await axios.delete("/api/issues/" + id);
                    router.push("/issues/list");
                    router.refresh();
                  } catch (error) {
                    setErr(true)
                  }finally {setIsDeleting(false)}
                }}
                variant="solid"
                color="red"
              >
                Delete
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root open={err}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Something went wrong</AlertDialog.Title>
          <AlertDialog.Description size="2">
            This issue can&apos;t be deleted, please try again.
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button onClick={() => setErr(false)} variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueBtn;
