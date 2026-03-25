"use client";

import { Column, Flex, Heading, Text, SmartLink } from "@once-ui-system/core";

const projects = [
  {
    name: "DeFi Dashboard",
    description:
      "A real-time dashboard for tracking DeFi portfolio performance across multiple chains. Features live price feeds, yield calculations, and transaction history.",
    tech: ["Next.js", "TypeScript", "Web3.js", "GraphQL"],
    repo: "https://github.com/cryptocanuck/defi-dashboard",
  },
  {
    name: "Token Launchpad",
    description:
      "A no-code platform for deploying ERC-20 tokens with built-in vesting schedules and multi-sig governance. Deployed on Ethereum and Polygon.",
    tech: ["Solidity", "React", "Hardhat", "Ethers.js"],
    repo: "https://github.com/cryptocanuck/token-launchpad",
  },
  {
    name: "Chain Explorer",
    description:
      "A lightweight block explorer for EVM-compatible networks. Browse blocks, transactions, and contracts with a clean, responsive interface.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    repo: "https://github.com/cryptocanuck/chain-explorer",
  },
  {
    name: "NFT Minting Toolkit",
    description:
      "An open-source toolkit for artists and creators to generate, upload, and mint NFT collections with metadata management and IPFS integration.",
    tech: ["TypeScript", "React", "Solidity", "IPFS"],
    repo: "https://github.com/cryptocanuck/nft-minting-toolkit",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "var(--spacing-l)",
            width: "100%",
          }}
        >
          {projects.map((project) => (
            <Column
              key={project.name}
              gap="m"
              style={{
                padding: "var(--spacing-l)",
                borderRadius: "var(--radius-l)",
                border: "1px solid var(--neutral-border-medium)",
                background: "var(--neutral-background-weak)",
              }}
            >
              <Heading variant="heading-strong-s">{project.name}</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {project.description}
              </Text>
              <Flex gap="s" wrap>
                {project.tech.map((tag) => (
                  <Text
                    key={tag}
                    variant="label-default-xs"
                    style={{
                      padding: "var(--spacing-xs) var(--spacing-m)",
                      borderRadius: "var(--radius-full)",
                      background: "var(--brand-background-weak)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag}
                  </Text>
                ))}
              </Flex>
              <SmartLink
                href={project.repo}
                style={{
                  marginTop: "auto",
                }}
              >
                <Text
                  variant="label-default-s"
                  onBackground="brand-strong"
                >
                  View Repository &rarr;
                </Text>
              </SmartLink>
            </Column>
          ))}
        </div>
      </Column>
    </Column>
  );
}
