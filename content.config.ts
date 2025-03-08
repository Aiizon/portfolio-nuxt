import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from 'zod';

// @todo: can't load schema for some reason
const projectsSchema = z.object({
    id:               z.number(),
    title:            z.string(),
    slug:             z.string(),
    shortDescription: z.string(),
    description:      z.string(),
    bannerImage:      z.string(),
    smallImage:       z.string(),
    repositoryLink:   z.string(),
    demoLink:         z.string(),
    tags:             z.array(z.string()),
    createdAt:        z.string()
});

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            type: 'page',
            source: 'projects/*.md'
        }),
        techWatch: defineCollection({
            type: 'page',
            source: "tech-watch/*.md"
        })
    }
});