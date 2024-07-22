"use client"
import React from 'react'
import {Card, CardHeader,CardBody} from "@nextui-org/react";
const Terminal = () => {
  return (
        // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        //     <div className="terminal-window w-3/5 h-2/5 rounded-lg text-left" >
        //     <div className="terminal-header flex flex-row-reverse min-h-1 border-8 rounded-t-lg border-gray-500 text-left" >
        //         <div className="button w-3 h-3 inline-block bg-red-600 rounded-full mx-1"></div>
        //         <div className="button w-3 h-3 inline-block bg-red-600 rounded-full mx-1"></div>
        //         <div className="button w-3 h-3 inline-block bg-red-600 rounded-full mx-1"></div>
        //     </div>
        //     <div className="">

        //     </div>
        //     test
        //     </div>
        // </section>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Card isPressable className="terminal-window min-w-[500px] max-w-[900px] h-2/5 text-left dark:bg-default-100/80">
                <CardHeader className="flex flex-row-reverse bg-zinc-300/80 dark:bg-default-100/20">
                    <div className="button w-3 h-3 inline-block bg-red-500 rounded-full mx-1"></div>
                    <div className="button w-3 h-3 inline-block bg-yellow-400 rounded-full mx-1"></div>
                    <div className="button w-3 h-3 inline-block bg-green-500 rounded-full mx-1"></div>
                </CardHeader>
                <CardBody className="terminal-body inline-block h-72  bg-zinc-200 dark:bg-default-100/80">
                    <div className="terminal text flex flex-col text-sm font-mono ">
                        <div className="flex flexrow">
                            <div className="text-cyan-700 dark:text-cyan-300">[air@airwu.dev:~]</div>
                            <div>$&nbsp;</div>
                            <div className="relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-zinc-200 dark:before:bg-default-100">neofetch</div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </section>
  )
}

export default Terminal