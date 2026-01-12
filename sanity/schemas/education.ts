import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g. B.S. Computer Science",
    }),
    defineField({
      name: "university",
      title: "University/Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
      description: "Graduation Year",
    }),
    defineField({
      name: "details",
      title: "Details / Honors",
      type: "text",
      description: "e.g. key achievements, honors, activities",
    }),
  ],
  preview: {
    select: {
      title: "degree",
      subtitle: "university",
    },
  },
});
