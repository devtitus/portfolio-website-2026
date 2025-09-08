import { createClient } from "@/prismicio";

export interface SkillItem {
  id: string;
  uid: string | null;
  label: string;
  iconUrl: string;
}

export const getSkills = async (): Promise<SkillItem[]> => {
  const client = createClient();
  const docs = await client.getAllByType("my_skills", {
    orderings: [
      {
        field: "my.my_skills.uid",
        direction: "desc",
      },
    ],
  });

  return docs.map((doc) => ({
    id: doc.id,
    uid: doc.uid ?? null,
    label: (doc.data as any).skill_label || doc.uid || "",
    iconUrl: (doc.data as any).skill_icon?.url || "",
  }));
};
