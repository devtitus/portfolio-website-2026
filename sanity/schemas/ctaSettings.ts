import { defineField, defineType } from "sanity";

export default defineType({
  name: "ctaSettings",
  title: "CTA Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "CTA Image Title",
      type: "string",
    }),
    defineField({
      name: "contactBackgroundImage",
      title: "Contact Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
