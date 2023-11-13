import React from 'react';
import {Skeleton} from "@/app/components";



function Loading() {
    return (
        <div className={'max-w-xl mx-auto'}>
            <p>
                <Skeleton/>
            </p>
            <div className={'mb-4'}>
                <Skeleton height={16} />
            </div>
        </div>
    );
}

export default Loading;