"use client";

import { Column, Flex, Text, Line, ThemeSwitcher } from "@once-ui-system/core";

export function Footer() {
  return (
    <Column as="footer" fillWidth horizontal="center" paddingX="l">
      <Column fillWidth maxWidth="l">
        <Line />
        <Flex
          fillWidth
          horizontal="between"
          vertical="center"
          paddingY="l"
        >
          <Text variant="body-default-s" onBackground="neutral-weak">
            cryptocanuck.com — Built with Next.js + Once UI
          </Text>
          <ThemeSwitcher />
        </Flex>
      </Column>
    </Column>
  );
}
