import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Name of the skill (e.g., React, TypeScript, Node.js)',
    }),
    defineField({
      name: 'icon',
      title: 'Skill Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: 'Icon representing the skill',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the skill should appear (lower numbers appear first)',
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      media: 'icon',
      order: 'order',
    },
    prepare(selection) {
      const { title, media, order } = selection
      return {
        title,
        media,
        subtitle: order ? `Order: ${order}` : 'No order set',
      }
    },
  },
})
