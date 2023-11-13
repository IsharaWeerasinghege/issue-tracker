import React from 'react';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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