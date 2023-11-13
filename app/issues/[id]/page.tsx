import React from 'react';
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import {Box, Grid} from "@radix-ui/themes";
import EditIssueButton from "@/app/issues/[id]/EditIssueButton";
import IssueDetails from "@/app/issues/[id]/IssueDetails";

interface Props {
    params: {
        id: string
    }
}

const IssueDetail = async ({params}: Props) => {

    const issue = await prisma.issue.findUnique({
        where: {
            id: params.id
        }
    })

    // @ts-ignore
    if (!issue)
        return notFound()


    // @ts-ignore
    return (
        <Grid columns={{initial: "1", md: "2"}} gap="5">
            <Box>
                <IssueDetails issue={issue}/>
            </Box>
            <Box>
                <EditIssueButton issueId={issue?.id}/>
            </Box>
        </Grid>
    );
}

export default IssueDetail;