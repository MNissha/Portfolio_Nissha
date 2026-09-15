import { z } from "zod";

export const navLinkSchema = z.object({
  href: z.string(),
  label: z.string(),
});

export type NavLink = z.infer<typeof navLinkSchema>;
