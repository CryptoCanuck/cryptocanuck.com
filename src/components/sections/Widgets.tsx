"use client";

import { Column, Heading, Text } from "@once-ui-system/core";

const widgets = [
  { name: "Anthropic Token Tracker" },
  { name: "Widget Slot" },
  { name: "Widget Slot" },
];

export default function Widgets() {
  return (
    <Column
      id="widgets"
      fillWidth
      padding="xl"
      paddingY="2xl"
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
          Widgets
        </Text>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "var(--spacing-l)",
            width: "100%",
          }}
        >
          {widgets.map((widget, index) => (
            <Column
              key={`${widget.name}-${index}`}
              gap="m"
              horizontal="center"
              vertical="center"
              style={{
                padding: "var(--spacing-xl)",
                borderRadius: "var(--radius-l)",
                border: "1px dashed var(--neutral-border-medium)",
                background: "var(--neutral-background-weak)",
                minHeight: "180px",
              }}
            >
              <Heading variant="heading-strong-s">{widget.name}</Heading>
              <Text
                variant="label-default-xs"
                onBackground="neutral-weak"
                style={{ opacity: 0.5 }}
              >
                Coming Soon
              </Text>
            </Column>
          ))}
        </div>
      </Column>
    </Column>
  );
}
