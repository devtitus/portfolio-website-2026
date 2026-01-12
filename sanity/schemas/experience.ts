import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
      hidden: ({ document }) => !!document?.isCurrent,
    }),
    defineField({
      name: "isCurrent",
      title: "Is Current Role?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Brief description of responsibilities and achievements",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "company",
    },
  },
});
