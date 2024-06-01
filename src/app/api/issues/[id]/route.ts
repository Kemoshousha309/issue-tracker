import { IssueSchema, PatchIssueSchema } from "@/app/schema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function PATCH(request: NextRequest, {params: {id}}:{params: {id: string}}) {
    const body =  await request.json();

    // validation
    const validation = PatchIssueSchema.safeParse(body);
    if(!validation.success)
        return NextResponse.json({errors: validation.error.format()}, {status: 400})

    // existing issue
    const existIssue = await prisma.issue.findUnique({
        where:{
            id: +id
        }
    })
    if(!existIssue)
        return NextResponse.json({errors: "Issue Not Found"}, {status: 404})
    
    // update issue
    const {title, description, assignedToUserId} = body;
    // check if the assigned user is already existing
    if(assignedToUserId) {
        const existUser = await prisma.user.findUnique({
            where:{
                id: assignedToUserId
            }
        })
        if(!existUser)
            return NextResponse.json({errors: "Assigned User Not Found"}, {status: 404})
    }
    const updatedIssue = await prisma.issue.update({
        where:{
            id: +id
        },
        data: {
           title,
           description,
           assignedToUserId
        }
    })

    return NextResponse.json(updatedIssue, {status: 200})
}

export async function DELETE(request: NextRequest, {params: {id}}:{params: {id: string}}) {
    // existing issue
    const existIssue = await prisma.issue.findUnique({
        where:{
            id: +id
        }
    })
    if(!existIssue)
        return NextResponse.json({errors: "Issue Not Found"}, {status: 404})
    
    // Delete issue
    const updatedIssue = await prisma.issue.delete({
        where:{
            id: +id
        }
    })

    return NextResponse.json({})
}