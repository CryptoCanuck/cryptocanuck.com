"use client";

import {
  Column,
  Flex,
  Heading,
  Text,
  SmartLink,
  Card,
  Tag,
  TiltFx,
  RevealFx,
  Icon,
} from "@once-ui-system/core";

const projects = [
  {
    name: "DeFi Dashboard",
    description:
      "A real-time dashboard for tracking DeFi portfolio performance across multiple chains. Features live price feeds, yield calculations, and transaction history.",
    tech: ["Next.js", "TypeScript", "Web3.js", "GraphQL"],
    repo: "https://github.com/cryptocanuck/defi-dashboard",
    icon: "chart" as const,
  },
  {
    name: "Token Launchpad",
    description:
      "A no-code platform for deploying ERC-20 tokens with built-in vesting schedules and multi-sig governance. Deployed on Ethereum and Polygon.",
    tech: ["Solidity", "React", "Hardhat", "Ethers.js"],
    repo: "https://github.com/cryptocanuck/token-launchpad",
    icon: "rocket" as const,
  },
  {
    name: "Chain Explorer",
    description:
      "A lightweight block explorer for EVM-compatible networks. Browse blocks, transactions, and contracts with a clean, responsive interface.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    repo: "https://github.com/cryptocanuck/chain-explorer",
    icon: "cube" as const,
  },
  {
    name: "NFT Minting Toolkit",
    description:
      "An open-source toolkit for artists and creators to generate, upload, and mint NFT collections with metadata management and IPFS integration.",
    tech: ["TypeScript", "React", "Solidity", "IPFS"],
    repo: "https://github.com/cryptocanuck/nft-minting-toolkit",
    icon: "code" as const,
  },
];

export default function Projects() {
  return (
    <Column
      id="projects"
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
            Projects
          </Text>
        </RevealFx>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "var(--spacing-l)",
            width: "100%",
          }}
        >
          {projects.map((project, index) => (
            <RevealFx
              key={project.name}
              translateY={16}
              speed="medium"
              delay={0.1 * (index + 1)}
            >
              <TiltFx intensity={4}>
                <Card
                  fillHeight
                  padding="l"
                  gap="m"
                  direction="column"
                >
                  <Flex vertical="center" gap="s">
                    <Icon
                      name={project.icon}
                      size="m"
                      onBackground="brand-strong"
                    />
                    <Heading variant="heading-strong-s">
                      {project.name}
                    </Heading>
                  </Flex>

                  <Text
                    variant="body-default-m"
                    onBackground="neutral-weak"
                  >
                    {project.description}
                  </Text>

                  <Flex gap="8" wrap>
                    {project.tech.map((tag) => (
                      <Tag
                        key={tag}
                        variant="neutral"
                        size="s"
                        label={tag}
                      />
                    ))}
                  </Flex>

                  <SmartLink href={project.repo} style={{ marginTop: "auto" }}>
                    <Text
                      variant="label-default-s"
                      onBackground="brand-strong"
                    >
                      View Repository &rarr;
                    </Text>
                  </SmartLink>
                </Card>
              </TiltFx>
            </RevealFx>
          ))}
        </div>
      </Column>
    </Column>
  );
}
