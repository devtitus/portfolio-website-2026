import { createClient } from "@/prismicio";

export interface TestimonialItem {
  id: string;
  uid: string | null;
  testimonial: string;
  name: string;
  company: string;
  image: string;
}

export const getTestimonials = async (): Promise<TestimonialItem[]> => {
  const client = createClient();
  const response = await client.getAllByType("my_testimonials", {
    orderings: [
      {
        field: "my.my_testimonials.uid",
        direction: "desc",
      },
    ],
  });

  return response.map((doc) => ({
    id: doc.id,
    uid: doc.uid ?? null,
    testimonial: (doc.data as any).testimonial || "",
    name: (doc.data as any).name || "",
    company: (doc.data as any).company || "",
    image: (doc.data as any).avatar?.url || "",
  }));
};
