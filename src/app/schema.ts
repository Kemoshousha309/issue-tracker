import { z } from "zod";

export const IssueSchema = z.object({
    title: z.string().min(1, "Title Field is Required").max(255),
    description: z.string().min(1, "Description Field is Required")
})