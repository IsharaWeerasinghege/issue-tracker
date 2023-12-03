'use client';
import React from 'react';
import {AlertDialog, Button, Flex} from "@radix-ui/themes";
import {useRouter} from "next/navigation";
import axios from "axios";

function DeleteIssueButton({issueId}: { issueId: string }) {
    const router = useRouter();
    const [error, setError] = React.useState(false);

    const deleteHandler = async () => {
        try {
            await axios.delete(`/api/issues/${issueId}`);
            router.push('/issues');
            router.refresh();
        } catch (e) {
            setError(true);
        }
    }

    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button color={'red'}>
                        Delete
                    </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content>
                    <AlertDialog.Title>
                        Confirm Deletion
                    </AlertDialog.Title>
                    <AlertDialog.Description>
                        Are you sure you want to delete this issue? This action cannot be undone.
                    </AlertDialog.Description>
                    <Flex mt={"4"} gap={"3"} justify={"end"}>
                        <AlertDialog.Cancel>
                            <Button variant={'soft'} color={'gray'}>Cancel</Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <Button color={'red'} onClick={deleteHandler}>Delete</Button>
                        </AlertDialog.Action>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>

            <AlertDialog.Root open={error}>
                <AlertDialog.Content>
                    <AlertDialog.Title>Error</AlertDialog.Title>
                    <AlertDialog.Description>
                        This issue cannot be deleted.
                    </AlertDialog.Description>
                    <Flex mt={"4"} gap={"3"} justify={"end"}>
                        <AlertDialog.Cancel>
                            <Button variant={'soft'} color={'gray'}
                                    className={'cursor-pointer'}
                                    onClick={() => {
                                        setError(false);
                                    }}
                            >
                                OK
                            </Button>
                        </AlertDialog.Cancel>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    );
}

export default DeleteIssueButton;