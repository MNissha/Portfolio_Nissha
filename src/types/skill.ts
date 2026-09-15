import { z } from "zod";

export const skillSchema = z.object({
  name: z.string(),
  level: z.string(),
  color: z.string(),
});

export type Skill = z.infer<typeof skillSchema>;
