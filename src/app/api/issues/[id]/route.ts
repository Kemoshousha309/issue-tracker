import { IssueSchema } from "@/app/schema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function PATCH(request: NextRequest, {params: {id}}:{params: {id: string}}) {
    const body =  await request.json();

    // validation
    const validation = IssueSchema.safeParse(body);
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
    const updatedIssue = await prisma.issue.update({
        where:{
            id: +id
        },
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(updatedIssue, {status: 200})
}