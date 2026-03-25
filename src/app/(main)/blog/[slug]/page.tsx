import { notFound } from "next/navigation";
import { Column, Heading, Text } from "@once-ui-system/core";
import { SmartLink } from "@once-ui-system/core";
import { posts } from "@/data/posts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Column fillWidth maxWidth="m" horizontal="center" gap="l" paddingY="xl">
      <SmartLink href="/blog">
        <Text variant="body-default-s">&larr; Back to Blog</Text>
      </SmartLink>
      <Column gap="s">
        <Heading variant="display-strong-m">{post.title}</Heading>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {post.date}
        </Text>
      </Column>
      <Column gap="m" fillWidth>
        {post.content.split("\n\n").map((paragraph, index) => (
          <Text key={index} variant="body-default-m">
            {paragraph}
          </Text>
        ))}
      </Column>
    </Column>
  );
}
