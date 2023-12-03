import React from 'react';
import {Button} from "@radix-ui/themes";

function DeleteIssueButton({issueId}:{ issueId: string }) {
    return (
        <Button color={'red'}>
            Delete
        </Button>
    );
}

export default DeleteIssueButton;