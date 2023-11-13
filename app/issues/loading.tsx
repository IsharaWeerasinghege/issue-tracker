import React from 'react';
import IssuesActions from "@/app/issues/IssuesActions";
import {Table} from "@radix-ui/themes";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loading() {
    const issues = [1, 2, 3, 4, 5];
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
                    {issues.map((issue) => (
                        <Table.Row key={issue}>
                            <Table.Cell>
                                <Skeleton/>
                            </Table.Cell>
                            <Table.Cell className={'text-center'}>
                                <Skeleton/>
                            </Table.Cell>
                            <Table.Cell className={'text-center'}>
                                <Skeleton/>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

            </Table.Root>
        </div>
    );
}

export default Loading;