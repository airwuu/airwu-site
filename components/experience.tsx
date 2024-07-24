import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
const rows = [
  {
    key: "1",
    language: "C++",
    technologies: "React",
  },
  {
    key: "2",
    language: "Python",
    technologies: "Tailwind",
  },
  {
    key: "3",
    language: "Java",
    technologies: "Node.js",
  },
  {
    key: "4",
    language: "Javascript",
    technologies: "Express",
  },
  {
    key: "5",
    language: "Typescript",
    technologies: "Docker",
  },
  {
    key: "6",
    language: "HTML",
    technologies: "Linux",
  },
  {
    key: "7",
    language: "CSS",
    technologies: "",
  },
];

const columns = [
  {
    key: "language",
    label: "LANGUAGES",
  },
  {
    key: "technologies",
    label: "TECHNOLOGIES",
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center py-8 md:py-10 md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4 justify-center">
      <Table className="">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/* ------------------------------------------ */}
      <Table className="h-full content-normal  pb-20">
        <TableHeader>
          <TableColumn>WORK EXPERIENCE</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>
              <Accordion defaultExpandedKeys={["0"]}>
                <AccordionItem
                  key="1"
                  aria-label="ML Intern"
                  subtitle="Wilsilica - Lumos Control"
                  title="ML Intern"
                >
                  <div>Aug. 2021 - Aug. 2022</div>
                  <div className="py-2 space-x-1">
                    <Chip color="secondary" size="sm" variant="flat">
                      Python
                    </Chip>
                    <Chip color="secondary" size="sm" variant="flat">
                      Keras
                    </Chip>
                    <Chip color="secondary" size="sm" variant="flat">
                      ML
                    </Chip>
                  </div>
                </AccordionItem>
                {/* <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  subtitle={
                    <span>
                      Press to expand <strong>key 2</strong>
                    </span>
                  }
                  title="Accordion 2"
                >
                  test test test
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
                  test test test
                </AccordionItem> */}
              </Accordion>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Experience;
