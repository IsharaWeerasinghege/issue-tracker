import React from 'react';
import prisma from "@/prisma/client";
import Link from "@/app/components/Link";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import delay from "delay";
import IssuesActions from "@/app/issues/IssuesActions";
import {Table} from "@radix-ui/themes";

const Issues = async () => {
    const issues = await prisma.issue.findMany();

    await delay(2000)

    // @ts-ignore
    return (
        <div>
            <IssuesActions/>

            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell className={'text-center'}>Issue</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className={'text-center'}>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className={'text-center'}>Created</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {issues.map(({createdAt, id, status, title}) => (
                        <Table.Row key={id}>
                            <Table.Cell>
                                <Link href={`/issues/${id}`}>{title}</Link>
                            </Table.Cell>
                            <Table.Cell className={'text-center'}>
                                <IssueStatusBadge status={status}/>
                            </Table.Cell>
                            <Table.Cell className={'text-center'}>{createdAt.toDateString()}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

            </Table.Root>
        </div>
    );
}

export default Issues