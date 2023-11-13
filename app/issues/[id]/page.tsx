import React from 'react';
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import {Card, Flex, Heading, Text} from "@radix-ui/themes";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import ReactMarkdown from "react-markdown";

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


    // @ts-ignore
    return (
        <div className={'w-full'}>
            <Heading className={'capitalize'}>{issue?.title}</Heading>
            <Flex className={'my-4 gap-2'}>
                <IssueStatusBadge status={issue?.status}/>
                <Text>{issue?.createdAt.toDateString()}</Text>
            </Flex>
            <Card className={'prose w-full'}>
                <ReactMarkdown>
                    {issue?.description || ''}
                </ReactMarkdown>
            </Card>
        </div>
    );
}

export default IssueDetails;