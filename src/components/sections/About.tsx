"use client";

import {
  Column,
  Flex,
  Heading,
  Text,
  Avatar,
  RevealFx,
} from "@once-ui-system/core";

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
        <RevealFx translateY={8} speed="fast">
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
        </RevealFx>

        <Flex fillWidth gap="xl" wrap>
          <RevealFx translateY={16} speed="medium" delay={0.1}>
            <Column horizontal="center" vertical="center">
              <Avatar
                size="xl"
                value="CR"
                statusIndicator={{ color: "green" }}
              />
            </Column>
          </RevealFx>

          <RevealFx
            translateY={16}
            speed="medium"
            delay={0.2}
            style={{ flex: 1, minWidth: 280 }}
          >
            <Column gap="m">
              <Heading variant="heading-strong-l">
                Hey, I&apos;m Chris Robinson
              </Heading>

              <Text variant="body-default-m" onBackground="neutral-weak">
                I&apos;m a Distributed Systems Engineer at Cloud Metric Inc.,
                based in Kingston, Ontario. I specialize in designing and
                building resilient, high-throughput distributed systems that
                power modern cloud infrastructure. My work focuses on
                microservices architecture, event-driven systems, and
                making complex distributed workflows both reliable and
                observable.
              </Text>

              <Text variant="body-default-m" onBackground="neutral-weak">
                I graduated from Queen&apos;s University, where I developed a
                strong foundation in computer science and systems thinking.
                Since then, I&apos;ve been deep in the world of Go, Rust, and
                cloud-native tooling — building services that handle real-world
                scale with gRPC, Kubernetes, and event streaming platforms.
              </Text>

              <Text variant="body-default-m" onBackground="neutral-weak">
                Outside of work, I enjoy contributing to open-source projects,
                exploring new infrastructure patterns, and sharing what I&apos;ve
                learned with the engineering community. This site is my corner
                of the web — a place to share projects, ideas, and the
                occasional deep dive into distributed systems topics.
              </Text>
            </Column>
          </RevealFx>
        </Flex>
      </Column>
    </Column>
  );
}
