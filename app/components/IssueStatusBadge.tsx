import React from 'react';
import {Badge} from "@radix-ui/themes";

function IssueStatusBadge({status}: { status: String }) {
    return (
        <Badge
            color={status.toLowerCase() === 'open' ? 'red' : status.toLowerCase() === 'in_progress' ? 'violet' : status.toLowerCase() === 'done' ? 'green' : 'gray'}>
            {status.toLowerCase() === 'open' ? 'Open' : status.toLowerCase() === 'in_progress' ? 'In Progress' : status.toLowerCase() === 'done' ? 'Closed' : 'Unknown'}
        </Badge>
    );
}

export default IssueStatusBadge;