'use client'
import {Button, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function NewIssues() {
    return (
        <div className={'max-w-xl space-y-3 mx-auto text-center'}>
            <TextField.Root>
                <TextField.Input placeholder={'Title'}/>
            </TextField.Root>

            <SimpleMDE placeholder={'Description'}  />

            <Button>
                Create new issue
            </Button>
        </div>
    );
}

export default NewIssues;