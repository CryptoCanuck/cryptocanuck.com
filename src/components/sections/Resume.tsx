"use client";

import { Column, Flex, Heading, Text } from "@once-ui-system/core";

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Maple Digital Inc.",
    dates: "2022 — Present",
    description:
      "Leading the development of performant web applications using Next.js and React. Architecting component libraries and design systems for cross-team adoption.",
  },
  {
    role: "Full-Stack Developer",
    company: "Northern Byte Labs",
    dates: "2019 — 2022",
    description:
      "Built and maintained full-stack applications with TypeScript, Node.js, and PostgreSQL. Delivered client-facing dashboards and internal tooling.",
  },
  {
    role: "Junior Developer",
    company: "Canuck Software Co.",
    dates: "2017 — 2019",
    description:
      "Contributed to frontend features, wrote unit tests, and participated in code reviews. Gained foundational experience with React and REST APIs.",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Solidity",
  "Tailwind CSS",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "Git",
  "CI/CD",
  "Web3.js",
  "REST APIs",
  "Figma",
  "Agile",
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

        <Flex fillWidth gap="xl" wrap>
          {/* Experience */}
          <Column gap="l" style={{ flex: 2, minWidth: 280 }}>
            <Heading variant="heading-strong-l">Experience</Heading>
            <Column gap="l">
              {experience.map((item) => (
                <Column
                  key={item.role + item.company}
                  gap="xs"
                  style={{
                    borderLeft: "2px solid var(--brand-solid-strong)",
                    paddingLeft: "var(--spacing-m)",
                  }}
                >
                  <Heading variant="heading-strong-s">{item.role}</Heading>
                  <Flex gap="s" vertical="center">
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {item.company}
                    </Text>
                    <Text
                      variant="label-default-xs"
                      onBackground="neutral-weak"
                      style={{ opacity: 0.5 }}
                    >
                      {item.dates}
                    </Text>
                  </Flex>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {item.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>

          {/* Skills */}
          <Column gap="l" style={{ flex: 1, minWidth: 200 }}>
            <Heading variant="heading-strong-l">Skills</Heading>
            <Flex gap="s" wrap>
              {skills.map((skill) => (
                <Text
                  key={skill}
                  variant="label-default-s"
                  style={{
                    padding: "var(--spacing-xs) var(--spacing-m)",
                    borderRadius: "var(--radius-full)",
                    background: "var(--brand-background-weak)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill}
                </Text>
              ))}
            </Flex>
          </Column>
        </Flex>
      </Column>
    </Column>
  );
}
