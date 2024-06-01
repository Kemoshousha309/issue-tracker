import { z } from "zod";

export const IssueSchema = z.object({
  title: z.string().min(1, "Title Field is Required").max(255),
  description: z.string().min(1, "Description Field is Required"),
});

export const PatchIssueSchema = z.object({
  title: z.string().min(1, "Title Field is Required").max(255).optional(),
  description: z
    .string()
    .min(1, "Description Field is Required")
    .max(255)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "assigned user Field is Required")
    .max(255)
    .optional()
    .nullable()
});
