import React from 'react';
import IssueForm from "@/app/issues/_components/IssueForm";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";

interface Props {
    params: {
        id: string;
    }
}

const EditIssue = async ({params}: Props)=> {
    const issue = await prisma.issue.findUnique({
        where: { id: params.id}
    });


    if (!issue) notFound();


    return (
        <IssueForm issue={issue} />
    );
}

export default EditIssue;