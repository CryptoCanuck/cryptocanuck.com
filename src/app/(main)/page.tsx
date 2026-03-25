import { Column } from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Projects from "@/components/sections/Projects";
import Widgets from "@/components/sections/Widgets";
import Contact from "@/components/sections/Contact";

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
      <About />
      <Resume />
      <Projects />
      <Widgets />
      <Contact />
    </Column>
  );
}
