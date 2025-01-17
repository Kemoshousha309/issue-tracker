import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { IssueSchema } from "@/app/schema";



export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = IssueSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json({errors: validation.error.format()}, {status: 400})

    const newUser = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(newUser, {status: 201})
}