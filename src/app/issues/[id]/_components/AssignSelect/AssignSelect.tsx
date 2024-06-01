import { Issue, User } from "@prisma/client";
import delay from "delay";
import prisma from "../../../../../../prisma/client";
import { AssignSelectClient } from "./AssignSelectClient";


const AssignSelect = async ({issue}: {issue:Issue}) => {
  const users = await new Promise(async (resolve, reject) => {
    const users = await prisma.user.findMany({orderBy: {name: "asc"}});
    resolve(users);
  }) as User[];
  return (
   <AssignSelectClient issue={issue} users={users} />
  );
};


export default AssignSelect;
