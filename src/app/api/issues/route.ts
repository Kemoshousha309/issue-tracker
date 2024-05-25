import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createIssueSchema = z.object({
    title: z.string().min(1, "Title Field is Required").max(255),
    description: z.string().min(1, "Description Field is Required")
})
    
export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = createIssueSchema.safeParse(body)
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