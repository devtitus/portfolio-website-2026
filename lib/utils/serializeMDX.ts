import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";

/**
 * Serializes markdown content to MDX.
 * @param content The raw markdown string.
 * @returns The serialized MDX content.
 */
export async function serializeMDX(content: string): Promise<MDXRemoteSerializeResult> {
  if (!content) {
    return serialize("");
  }
  return await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      format: "mdx",
    },
  });
}
