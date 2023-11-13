import React from 'react';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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