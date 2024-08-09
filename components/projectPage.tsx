// import {connect} from 'react-redux'
import { Card, CardBody, Chip, CardFooter, Image } from "@nextui-org/react";
import React, { useRef, useEffect } from "react";

import airtab from "../public/images/airtab.png";
import croppy from "../public/images/croppy.png";
import fabrik from "../public/images/fabrik.gif";
import rufina from "../public/images/rufina.png";
import tetris from "../public/images/tetris.gif";
import wordboba from "../public/images/wordboba.png";
import tictactoe from "../public/images/tictactoe.png";
const ProjectPage = () => {
  const list = [
    {
      title: "fabrik-arm",
      img: fabrik,
      description:
        "An implmentation of FABRIK inverse kinematics with a GUI control interface",
      link: "https://github.com/airwuu/fabrik-arm",
      tech: ["Python", "Matplotlib"],
    },
    {
      title: "Rufina",
      img: rufina,
      description:
        "A chat bot designed to help UC Merced students compare menus",
      link: "https://github.com/airwuu/UCM-Bot",
      tech: ["Typescript"],
    },
    {
      title: "croppydeals",
      img: croppy,
      description:
        "A marketplace website aims to help farmers in the San Joaquin Valley sell produce",
      link: "https://github.com/airwuu/croppydeals",
      tech: ["React", "Firebase", "Tailwind", "Next.js"],
    },
    {
      title: "airtab",
      img: airtab,
      description: "My personal new tab extension that sky and air themed",
      link: "https://github.com/airwuu/air-tab",
      tech: ["React", "JavaScript", "HTML"],
    },
    {
      title: "Tic Tac Toe AI",
      img: tictactoe,
      description:
        "A playable CLI Tic Tac Toe game against a smart AI using graphs",
      link: "https://github.com/airwuu/tictactoe_ai",
      tech: ["C++"],
    },
    {
      title: "Tetris",
      img: tetris,
      description: "A fully playable clone of Tetris plus more modern features",
      link: "https://github.com/airwuu/Tetris",
      tech: ["Java"],
    },
    // {
    //   title: "Word Boba",
    //   img: wordboba,
    //   description:
    //     "A WIP multiplayer word game that is inspired by Bomb Party @ JKLM.FUN",
    //   link: "/",
    //   tech: ["React", "Socket.io", "Firebase"],
    // },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollRef.current) {
        event.preventDefault();
        scrollRef.current.scrollLeft += event.deltaY;
      }
    };

    const scrollElement = scrollRef.current;

    if (scrollElement) {
      scrollElement.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="gap-2 grid grid-cols-2 auto-rows-fr sm:grid-cols-4 py-8 md:py-10">
      {list.map((item, index) => (
        <Card
          key={index}
          isHoverable
          isPressable
          className="md:w-[200px] h-full border-1 border-gray-400 dark:border-none"
          shadow="sm"
          onPress={() => window.open(`${item.link}`, "_blank")}
        >
          <CardBody className="p-0">
            <Image
              key={item.title}
              alt={item.title}
              className="w-full object-cover h-[70px]"
              radius="none"
              shadow="sm"
              src={item.img.src}
              width="100%"
            />
          </CardBody>
          <CardBody className="">
            <b className="pl-1">{item.title}</b>
            <p className="pl-1 text-small text-default-500 ">
              {item.description}
            </p>
          </CardBody>
          <CardFooter className="flex flex-col text-small text-left items-start space-y-1">
            <div
              ref={scrollRef}
              className="scrollbar-hide"
              style={{ display: "flex", overflowX: "auto", width: "100%" }}
            >
              <ul className="flex flex-row space-x-1">
                {item.tech.map((technology, index2) => (
                  <a key={index2} href="/#">
                    <Chip
                      key={technology}
                      color="secondary"
                      size="sm"
                      variant="flat"
                    >
                      {technology}
                    </Chip>
                  </a>
                ))}
              </ul>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectPage;
