import React from 'react';
import {Button} from "@radix-ui/themes";
import Link from "next/link";
import {Pencil2Icon} from "@radix-ui/react-icons";

function EditIssueButton({issueId}: { issueId: String }) {
    return (
        <Button className={'cursor-pointer'}>
            <Link href={`/issues/${issueId}/edit`} className={'flex items-center gap-2'}>
                <Pencil2Icon />
                Edit
            </Link>
        </Button>
    );
}

export default EditIssueButton;