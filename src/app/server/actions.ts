'use server'

import prisma from "../../../prisma/client"

 
export async function assignUser(issueId: string, userId: string | null) {
    if(userId) {
        const existUser = await prisma.user.findUnique({
            where:{
                id: userId
            }
        })
        if(!existUser) {
            return {
                message: "The user is not Found"
            }   
        }
    }
    await prisma.issue.update({
        where:{
            id: +issueId
        },
        data: {
           assignedToUserId: userId
        }
    })
    if(!userId) {
        return {
            message: "unassigned successfully"
        }
    }else{
        return {
            message: "assigned successfully"
        }
    }

}