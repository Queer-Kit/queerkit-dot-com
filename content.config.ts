import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum([`solid`, `outline`, `subtle`, `soft`, `ghost`, `link`])
const colorEnum = z.enum([`primary`, `secondary`, `neutral`, `error`, `warning`, `success`, `info`])
const sizeEnum = z.enum([`xs`, `sm`, `md`, `lg`, `xl`])

const createLinkSchema = () => z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional().editor({ input: `icon` }),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional()
})

const createImageSchema = () => z.object({
  src: z.string().nonempty().editor({ input: `media` }),
  alt: z.string().optional()
})

export default defineContentConfig({
  collections: {
    documents: defineCollection({
      type: `page`,
      source: `1.documents/**/*.md`,
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        type: z.enum([`Policy`]),
        tags: z.array(z.string()),
        lastModified: z.date(),
        links: z.array(createLinkSchema())
      })
    }),
    blog: defineCollection({
      type: `page`,
      source: `2.blog/*.md`,
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        type: z.enum([`Blog Post, Personal Story`]),
        image: createImageSchema(),
        datePosted: z.date(),
        links: z.array(createLinkSchema()),
        authors: z.array(
          z.object({
            name: z.string().nonempty(),
            to: z.string().nonempty(),
            avatar: z.object({ src: z.string().nonempty().editor({ input: `media` }) })
          })
        )
      })
    }),
    guidelines: defineCollection({
      type: `page`,
      source: `3.guidelines/**/*.md`,
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        image: createImageSchema(),
        type: z.enum([`Gender Identity`, `Sexual Orientation`, `Romantic Orientation`]),
        tags: z.array(z.string()),
        lastModified: z.date(),
        links: z.array(createLinkSchema())
      })
    })
  }
})
