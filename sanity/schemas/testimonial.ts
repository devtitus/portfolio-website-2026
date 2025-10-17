import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'The testimonial text from the client',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Full name of the person giving the testimonial',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Company or organization name',
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: 'Photo of the person giving the testimonial',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the testimonial should appear (lower numbers appear first)',
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'avatar',
      order: 'order',
    },
    prepare(selection) {
      const { title, subtitle, media, order } = selection
      return {
        title,
        subtitle: `${subtitle}${order ? ` • Order: ${order}` : ''}`,
        media,
      }
    },
  },
})
