import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogs = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/blogs',
	}),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		description: z.string().optional(),
	}),
});

const marginalia = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/marginalia',
	}),
	schema: z.object({
		type: z.enum(['image', 'quote', 'link', 'note']),
		title: z.string(),
		image: z.string().optional(),
		link: z.string().url().optional(),
		source: z.string().optional(),
	}),
});

export const collections = {
	blogs,
	marginalia,
};