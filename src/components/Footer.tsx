import { Flex, Text } from "@once-ui-system/core";

export function Footer() {
  return (
    <Flex
      as="footer"
      fillWidth
      horizontal="center"
      paddingY="l"
      style={{ opacity: 0.5 }}
    >
      <Text variant="body-default-s" onBackground="neutral-weak">
        cryptocanuck.com — Built with Next.js + Once UI
      </Text>
    </Flex>
  );
}
