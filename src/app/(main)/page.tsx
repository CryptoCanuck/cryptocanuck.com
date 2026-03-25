import { Column } from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <Column fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <Hero />
    </Column>
  );
}
