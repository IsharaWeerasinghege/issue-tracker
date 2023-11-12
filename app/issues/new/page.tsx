'use client'
import {Button, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import { z } from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {createIssueSchema} from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";

type IssueForm = z.infer<typeof createIssueSchema>;

function NewIssues() {
    const { register, handleSubmit, control, formState:{ errors, isValid } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const router = useRouter();

    // @ts-ignore
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
            <ErrorMessage>{errors.title?.message}</ErrorMessage>

            <Controller name={'description'} control={control} render={({field}) => <SimpleMDE placeholder={'Description'} {...field} />} />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>

            <Button type={'submit'} disabled={!isValid}>
                Create new issue
            </Button>
        </form>
    );
}

export default NewIssues;