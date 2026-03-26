"use client";

import {
  Column,
  Heading,
  Text,
  Card,
  Icon,
  GlitchFx,
  RevealFx,
} from "@once-ui-system/core";

const widgets = [
  { name: "Anthropic Token Tracker", icon: "chart" as const },
  { name: "System Monitor", icon: "server" as const },
  { name: "Deploy Pipeline", icon: "rocket" as const },
];

export default function Widgets() {
  return (
    <Column
      id="widgets"
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
            Widgets
          </Text>
        </RevealFx>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "var(--spacing-l)",
            width: "100%",
          }}
        >
          {widgets.map((widget, index) => (
            <RevealFx
              key={`${widget.name}-${index}`}
              translateY={16}
              speed="medium"
              delay={0.1 * (index + 1)}
            >
              <Card
                padding="xl"
                gap="m"
                direction="column"
                horizontal="center"
                vertical="center"
                style={{
                  border: "1px dashed var(--neutral-border-medium)",
                  minHeight: "180px",
                }}
              >
                <Icon
                  name={widget.icon}
                  size="l"
                  onBackground="neutral-weak"
                />
                <Heading variant="heading-strong-s">
                  {widget.name}
                </Heading>
                <GlitchFx trigger="hover" speed="slow">
                  <Text
                    variant="label-default-xs"
                    onBackground="neutral-weak"
                    style={{ opacity: 0.5 }}
                  >
                    Coming Soon
                  </Text>
                </GlitchFx>
              </Card>
            </RevealFx>
          ))}
        </div>
      </Column>
    </Column>
  );
}
