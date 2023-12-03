import React from 'react';
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import {Box, Flex, Grid} from "@radix-ui/themes";
import EditIssueButton from "@/app/issues/[id]/EditIssueButton";
import IssueDetails from "@/app/issues/[id]/IssueDetails";
import DeleteIssueButton from "@/app/issues/[id]/DeleteIssueButton";

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
        <Grid columns={{initial: "1", md: "5"}} gap="5">
            <Box className={'lg:col-span-4'}>
                <IssueDetails issue={issue}/>
            </Box>
            <Box>
                <Flex direction={'column'} gap={'4'} >
                    <EditIssueButton issueId={issue?.id}/>
                    <DeleteIssueButton issueId={issue?.id}/>
                </Flex>
            </Box>
        </Grid>
    );
}

export default IssueDetail;