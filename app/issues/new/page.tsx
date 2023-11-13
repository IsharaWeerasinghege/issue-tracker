'use client'
import {Button, TextField} from "@radix-ui/themes";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {createIssueSchema} from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import React from "react";
import Spinner from "@/app/components/Spinner";

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
    ssr: false
});


type IssueForm = z.infer<typeof createIssueSchema>;

function NewIssues() {

    const {register, handleSubmit, control, formState: {errors, isValid, isSubmitting}} = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        await axios.post('/api/issues', data)
            .then(() => {
                toast.success('Issue created successfully');

                setTimeout(() => {
                    router.push('/issues');
                }, 1000);
            }).catch(() => {
                toast.error('Failed to create issue');
            });
    })

    // @ts-ignore
    return (
        <div>
            <form
                className={'max-w-xl space-y-3 mx-auto'}
                onSubmit={onSubmit}
            >
                <TextField.Root>
                    <TextField.Input placeholder={'Title'} {...register('title')} />
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>

                <Controller name={'description'} control={control}
                            render={({field}) => <SimpleMDE placeholder={'Description'} {...field} />}/>
                <ErrorMessage>{errors.description?.message}</ErrorMessage>

                <div className="flex items-center gap-2">
                    <Button type={'submit'} disabled={!isValid || isSubmitting} className={'cursor-pointer'}>
                        Create new issue
                    </Button>

                    {isSubmitting && <Spinner/>}
                </div>

            </form>
        </div>
    );
}

export default NewIssues;