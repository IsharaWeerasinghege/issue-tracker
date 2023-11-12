'use client'
import {Button, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

interface IssueForm {
    title: string;
    description: string;
}

function NewIssues() {
    const { register, handleSubmit, control } = useForm<IssueForm>();
    const router = useRouter();

    return (
        <form
            className={'max-w-xl space-y-3 mx-auto'}
            onSubmit={handleSubmit( async (data) => {
                await axios.post('/api/issues', data)
                    .then(() => {
                        toast.success('Issue created successfully');

                        setTimeout(() => {
                            router.push('/issues');
                        }, 1000);
                    }).catch((err) => {
                        toast.error('Failed to create issue');
                        console.log(err);
                    });
            })}
        >
            <TextField.Root>
                <TextField.Input placeholder={'Title'} {...register('title')} />
            </TextField.Root>

            <Controller name={'description'} control={control} render={({field}) => <SimpleMDE placeholder={'Description'} {...field} />} />

            <Button>
                Create new issue
            </Button>
        </form>
    );
}

export default NewIssues;