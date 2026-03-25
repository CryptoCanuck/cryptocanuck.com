import { Column, Heading, Text } from "@once-ui-system/core";
import { SmartLink } from "@once-ui-system/core";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog",
  description: "Blog posts from cryptocanuck.com",
};

export default function BlogPage() {
  return (
    <Column fillWidth maxWidth="m" horizontal="center" gap="l" paddingY="xl">
      <Heading variant="display-strong-m">Blog</Heading>
      <Column gap="l" fillWidth>
        {posts.map((post) => (
          <Column key={post.slug} gap="xs">
            <SmartLink href={`/blog/${post.slug}`}>
              <Heading variant="heading-strong-s">{post.title}</Heading>
            </SmartLink>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {post.date}
            </Text>
            <Text variant="body-default-m">{post.excerpt}</Text>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
