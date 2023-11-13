import React from 'react';
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";

interface Props {
    params: {
        id: string
    }
}

const IssueDetails = async ({params}: Props) => {

    const issue = await prisma.issue.findUnique({
        where: {
            id: params.id
        }
    })

    // @ts-ignore
    if (!issue)
        return notFound()


    return (
        <div>
            <p>{issue?.title}</p>
            <p>{issue?.description}</p>
            <p>{issue?.status}</p>
            <p>{issue?.createdAt.toDateString()}</p>
        </div>
    );
}

export default IssueDetails;