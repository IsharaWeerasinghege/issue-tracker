import React from 'react';
import {Issue} from "@prisma/client";
import {Card, Flex, Heading, Text} from "@radix-ui/themes";
import {IssueStatusBadge} from "@/app/components";
import ReactMarkdown from "react-markdown";

function IssueDetails({issue}:{ issue: Issue }) {
    return (
        <>
            <Heading className={'capitalize'}>{issue?.title}</Heading>
            <Flex className={'gap-2 my-4 '}>
                <IssueStatusBadge status={issue?.status}/>
                <Text>{issue?.createdAt.toDateString()}</Text>
            </Flex>
            <Card className={'prose w-full'}>
                <ReactMarkdown>
                    {issue?.description || ''}
                </ReactMarkdown>
            </Card>
        </>
    );
}

export default IssueDetails;