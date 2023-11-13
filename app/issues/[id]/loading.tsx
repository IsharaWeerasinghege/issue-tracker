import React from 'react';
import {Skeleton} from "@/app/components";

function Loading() {
    return (
        <div>
            <p>
                <Skeleton/>
            </p>
            <p>
                <Skeleton/>
            </p>
            <p>
                <Skeleton/>
            </p>
            <p>
                <Skeleton/>
            </p>
        </div>
    );
}

export default Loading;