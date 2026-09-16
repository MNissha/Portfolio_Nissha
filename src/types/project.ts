import { z } from "zod";

export const projectDetailsSchema = z.object({
  overview: z.string().optional(),
  role: z.string().optional(),
  duration: z.string().optional(),
  year: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  stack: z
    .array(
      z.object({
        label: z.string(),
        items: z.array(z.string()),
      }),
    )
    .optional(),
  learnings: z.string().optional(),
  video: z
    .object({
      thumbnail: z.string().optional(),
      url: z.string().optional(),
      caption: z.string().optional(),
    })
    .optional(),
  links: z
    .object({
      live: z.string().optional(),
      repo: z.string().optional(),
      figma: z.string().optional(),
      video: z.string().optional(),
    })
    .optional(),
  beforeAfter: z
    .array(
      z.object({
        before: z.string(),
        after: z.string(),
        caption: z.string().optional(),
      }),
    )
    .optional(),
  gallery: z
    .array(
      z.object({
        src: z.string(),
        caption: z.string().optional(),
      }),
    )
    .optional(),
});

export type ProjectDetails = z.infer<typeof projectDetailsSchema>;

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  desc: z.string(),
  tech: z.array(z.string()),
  color: z.string(),
  icon: z.string(),
  details: projectDetailsSchema.optional(),
});

export type Project = z.infer<typeof projectSchema>;
