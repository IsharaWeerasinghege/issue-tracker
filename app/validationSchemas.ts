import {z} from "zod";

export const issueSchema = z.object({
    title: z.string().min(1, "Title must be at least 1 character long").max(250, "Title must be less than 250 characters long"),
    description: z.string().min(1, "Description must be at least 1 character long").max(250, "Description must be less than 250 characters long"),
});