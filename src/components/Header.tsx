"use client";

import { Flex, Text, SmartLink } from "@once-ui-system/core";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Widgets", href: "#widgets" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  return (
    <Flex
      as="nav"
      fillWidth
      horizontal="center"
      position="fixed"
      zIndex={10}
      top="0"
      left="0"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "var(--page-background-translucent, rgba(0,0,0,0.6))",
      }}
    >
      <Flex
        fillWidth
        maxWidth="l"
        paddingX="l"
        paddingY="8"
        horizontal="space-between"
        vertical="center"
      >
        <SmartLink href="/" unstyled>
          <Text variant="heading-strong-s">cryptocanuck</Text>
        </SmartLink>

        <Flex as="ul" gap="4" vertical="center" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <SmartLink href={link.href} unstyled>
                <Text
                  variant="label-default-s"
                  onBackground="neutral-weak"
                  style={{ padding: "var(--static-space-8) var(--static-space-12)" }}
                >
                  {link.label}
                </Text>
              </SmartLink>
            </li>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
