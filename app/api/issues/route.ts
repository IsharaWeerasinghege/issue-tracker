import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
    title: z.string().min(1).max(250),
    description: z.string().min(1).max(250),
});

export async function POST(Request: NextRequest) {
    const body = await Request.json()

    try {
        const validatedBody = createIssueSchema.safeParse(body);

        if (!validatedBody.success) {
            return NextResponse.json(validatedBody.error.errors, {status: 400})
        } else {
            const newIssue = await prisma.issue.create({
                data: validatedBody.data
            })
            return NextResponse.json(newIssue, {status: 201})

        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, {status: 500})
    }
}