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

  // Sanitize content: Escape < characters that are not part of valid tags
  // This prevents MDX compilation errors when < is followed by a number or symbol
  // e.g., "Value <5" becomes "Value &lt;5" which is valid MDX
  const sanitizedContent = content.replace(/<(?![a-zA-Z_$]|\/|!)/g, "&lt;");

  return await serialize(sanitizedContent, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      format: "mdx",
    },
  });
}
