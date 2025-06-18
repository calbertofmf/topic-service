import { z } from 'zod';

export const CreateTopicSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    content: z.string().min(1),
    version: z.string().min(1),
    parentTopicId: z.string().optional(),
  })
});

export const UpdateTopicSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
  body: z.object({
    name: z.string().min(1).optional(),
    content: z.string().min(1).optional(),
    version: z.string().min(1).optional(),
    parentTopicId: z.string().optional().nullable(),
  })
});


export const FilteringTopicSchema = z
  .object({
    id: z.string().optional(),
    version: z.number().optional(),
    latest: z.boolean().optional(),
    name: z.boolean().optional(),
    content: z.boolean().optional(),
    parentTopicId: z.boolean().optional(),
  });
