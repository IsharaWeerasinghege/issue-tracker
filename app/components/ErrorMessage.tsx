import React, {PropsWithChildren} from 'react';
import {Text} from "@radix-ui/themes";

function ErrorMessage({children}: PropsWithChildren) {
    if (!children) return null;

    return (
        <Text className={'text-red-400 text-xs'} as={'p'}>{children}</Text>
    );
}

export default ErrorMessage;