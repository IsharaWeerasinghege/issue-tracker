'use client'
import {Button, TextField} from "@radix-ui/themes";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {issueSchema} from "@/app/validationSchemas";
import React from "react";
import {ErrorMessage, Spinner} from "@/app/components";


const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
    ssr: false
});


type IssueFormData = z.infer<typeof issueSchema>;

interface Props {
    issue : {
        id?: string,
        title?: string,
        description?: string,
    }
}
function IssueForm({issue}:{issue?: Props['issue']}) {

    const {register, handleSubmit, control, formState: {errors, isValid, isSubmitting}} = useForm<IssueFormData>({
        resolver: zodResolver(issueSchema)
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
                    <TextField.Input defaultValue={issue?.title} placeholder={'Title'} {...register('title')} />
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>

                <Controller name={'description'} control={control}
                            defaultValue={issue?.description}
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

export default IssueForm;