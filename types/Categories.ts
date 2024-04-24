import z from 'zod';

export const Category = z.object({
    id: z.number(),
    title: z.string(),
    image: z.string().url(),
    need_license: z.number().int(),
    lawyers_count: z.number().int(),
});

export const DigitalDirectoryCategories = z.object({
    status: z.boolean(),
    code: z.number(),
    message: z.string(),
    data: z.object({
        categories: z.array(Category),
    }),
});


