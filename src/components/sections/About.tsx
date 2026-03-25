"use client";

import { Column, Flex, Heading, Text } from "@once-ui-system/core";

export default function About() {
  return (
    <Column
      id="about"
      fillWidth
      padding="xl"
      paddingY="104"
      horizontal="center"
    >
      <Column maxWidth="l" gap="xl" fillWidth>
        <Text
          variant="label-default-s"
          onBackground="neutral-weak"
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            opacity: 0.6,
          }}
        >
          About
        </Text>

        <Flex fillWidth gap="xl" wrap>
          {/* Avatar / photo placeholder */}
          <Column
            horizontal="center"
            vertical="center"
            style={{
              minWidth: 200,
              minHeight: 200,
              width: 200,
              height: 200,
              borderRadius: "var(--radius-l)",
              background: "var(--brand-background-weak)",
              flexShrink: 0,
            }}
          >
            <Text
              variant="heading-strong-xl"
              onBackground="neutral-weak"
              style={{ opacity: 0.4 }}
            >
              CC
            </Text>
          </Column>

          {/* Bio text */}
          <Column gap="m" style={{ flex: 1, minWidth: 280 }}>
            <Heading variant="heading-strong-l">
              Hey, I&apos;m CryptoCanuck
            </Heading>

            <Text variant="body-default-m" onBackground="neutral-weak">
              I&apos;m a developer and builder based in Canada, passionate about
              web technology and the evolving world of digital finance. I love
              crafting clean, performant applications and exploring how
              decentralized systems are reshaping the way we think about the
              internet.
            </Text>

            <Text variant="body-default-m" onBackground="neutral-weak">
              When I&apos;m not writing code, you can find me diving into the
              latest developments in blockchain, contributing to open-source
              projects, or sharing what I&apos;ve learned with the community.
              I believe in building things that matter — tools and experiences
              that are useful, accessible, and well-crafted.
            </Text>

            <Text variant="body-default-m" onBackground="neutral-weak">
              This site is my corner of the web — a place to share projects,
              ideas, and the occasional deep dive into topics I find
              interesting. Thanks for stopping by.
            </Text>
          </Column>
        </Flex>
      </Column>
    </Column>
  );
}
