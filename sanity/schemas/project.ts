import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short subtitle appearing below the main title",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Project (Home Page)",
      type: "boolean",
      description: "Toggle to show this project on the home page",
      initialValue: false,
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Used for the project card preview",
    }),
    defineField({
      name: "projectLink",
      title: "Project Link (Live)",
      type: "url",
    }),
    defineField({
      name: "codeLink",
      title: "Code Link (GitHub)",
      type: "url",
    }),
    defineField({
      name: "designLink",
      title: "Design Link (Figma)",
      type: "url",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "formattedContent",
      title: "Detailed Content (Markdown)",
      type: "markdown",
      description: "Full project details displayed in the modal",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      subtitle: "tagline",
    },
  },
});
