import { z } from "zod";

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  desc: z.string(),
  tech: z.array(z.string()),
  color: z.string(),
  icon: z.string(),
});

export type Project = z.infer<typeof projectSchema>;
