"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {Card,CardBody, Tab,Tabs} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React, {useState} from 'react'

import Terminal from "@/components/terminal"
import Experience from "@/components/experience"
import ProjectPage from "@/components/projectPage"

export default function Home() {
  const [selected, setSelected] = React.useState("photos");
  return (
    <>
    <div className="flex w-full flex-col items-center">
      <Tabs 
        aria-label="Options"         
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="home" title="Home">
          <Terminal/>
        </Tab>
        <Tab key="experience" title="Experience">
          <Experience/>
        </Tab>
        <Tab key="projects" title="Projects">
          <ProjectPage/>
        </Tab>
      </Tabs>
    </div>  
    
    {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section> */}

    </>
  );
}
