"use client";

import {
  Column,
  Flex,
  Heading,
  Text,
  Tag,
  Chip,
  Timeline,
  RevealFx,
} from "@once-ui-system/core";

const experienceItems = [
  {
    label: "Distributed Systems Engineer",
    description: "Cloud Metric Inc. — 2022 – Present",
    state: "active" as const,
    children: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        Designing and building resilient distributed systems powering cloud
        infrastructure. Leading development of microservices with Go and Rust,
        orchestrated via Kubernetes. Implementing event-driven architectures
        with gRPC and message streaming for high-throughput data pipelines.
      </Text>
    ),
  },
  {
    label: "Backend Engineer",
    description: "Northern Systems Ltd. — 2019 – 2022",
    state: "default" as const,
    children: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        Built and maintained backend services with Go and TypeScript.
        Designed PostgreSQL schemas and Redis caching layers for
        performance-critical applications. Managed CI/CD pipelines and
        containerized deployments with Docker.
      </Text>
    ),
  },
  {
    label: "Junior Software Developer",
    description: "Canuck Software Co. — 2017 – 2019",
    state: "default" as const,
    children: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        Contributed to full-stack features using TypeScript and Node.js.
        Gained foundational experience with REST APIs, database design,
        and agile development workflows.
      </Text>
    ),
  },
];

const educationItems = [
  {
    label: "Queen's University",
    description: "Bachelor of Computing — Kingston, Ontario",
    state: "success" as const,
    children: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        Focused on computer science fundamentals, systems programming, and
        distributed computing. Developed a strong foundation in algorithms,
        data structures, and software engineering principles.
      </Text>
    ),
  },
];

const languages = ["Go", "Rust", "TypeScript"];
const infrastructure = [
  "Kubernetes",
  "Docker",
  "AWS",
  "Terraform",
  "CI/CD",
];
const systems = [
  "gRPC",
  "PostgreSQL",
  "Redis",
  "Microservices",
  "Event-Driven Architecture",
];

export default function Resume() {
  return (
    <Column
      id="resume"
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
            Resume
          </Text>
        </RevealFx>

        <Flex fillWidth gap="xl" wrap>
          {/* Experience & Education */}
          <RevealFx
            translateY={16}
            speed="medium"
            delay={0.1}
            style={{ flex: 2, minWidth: 280 }}
          >
            <Column gap="l">
              <Heading variant="heading-strong-l">Experience</Heading>
              <Timeline items={experienceItems} size="m" />

              <Heading variant="heading-strong-l" marginTop="l">
                Education
              </Heading>
              <Timeline items={educationItems} size="m" />
            </Column>
          </RevealFx>

          {/* Skills */}
          <RevealFx
            translateY={16}
            speed="medium"
            delay={0.2}
            style={{ flex: 1, minWidth: 200 }}
          >
            <Column gap="l">
              <Heading variant="heading-strong-l">Skills</Heading>

              <Column gap="m">
                <Text
                  variant="label-default-s"
                  onBackground="neutral-weak"
                >
                  Languages
                </Text>
                <Flex gap="8" wrap>
                  {languages.map((skill) => (
                    <Tag
                      key={skill}
                      variant="brand"
                      size="m"
                      label={skill}
                    />
                  ))}
                </Flex>
              </Column>

              <Column gap="m">
                <Text
                  variant="label-default-s"
                  onBackground="neutral-weak"
                >
                  Infrastructure
                </Text>
                <Flex gap="8" wrap>
                  {infrastructure.map((skill) => (
                    <Tag
                      key={skill}
                      variant="neutral"
                      size="m"
                      label={skill}
                    />
                  ))}
                </Flex>
              </Column>

              <Column gap="m">
                <Text
                  variant="label-default-s"
                  onBackground="neutral-weak"
                >
                  Systems & Patterns
                </Text>
                <Flex gap="8" wrap>
                  {systems.map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))}
                </Flex>
              </Column>
            </Column>
          </RevealFx>
        </Flex>
      </Column>
    </Column>
  );
}
