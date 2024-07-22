"use client"
import React, {useState, useEffect} from 'react'
import {Card, CardHeader,CardBody} from "@nextui-org/react";
const Terminal = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsVisible(true);
      }, 100); // Adjust the delay as needed
    }, []);
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
            <Card isPressable className="terminal-window md:w-3/5 md:min-w-[500px] lg:w-2/5 max-w-[900px] min-h-[360px] text-left dark:bg-default-100/80 border-1 border-gray-400 dark:border-none rounded-3xl transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-[105%]">
                <CardHeader className="flex flex-row-reverse bg-zinc-300/80 dark:bg-default-100/20">
                    <div className="button w-3 h-3 inline-block bg-red-500 rounded-full mx-1"></div>
                    <div className="button w-3 h-3 inline-block bg-yellow-400 rounded-full mx-1"></div>
                    <div className="button w-3 h-3 inline-block bg-green-500 rounded-full mx-1"></div>
                </CardHeader>
                <CardBody className="terminal-body scrollbar-hide inline-block h-72  bg-zinc-200 dark:bg-default-100/80">
                    <div className="terminal-text flex flex-col md:text-sm text-xs font-mono ">
                        <div className="first-line flex flexrow">
                            <div className="text-cyan-700 dark:text-cyan-200">[air@airwu.dev:~]</div>
                            <div>$&nbsp;</div>
                            <div className="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriteronce before:bg-zinc-200 dark:before:bg-default-100 after:absolute after:inset-0 after:w-[0.125em] after:animate-caretonce after:bg-black dark:after:bg-white">neofetch</div>
                        </div>
                        <div className={`neofetch-response flex flex-row place-content-between space-x-8 transition-opacity delay-500 duration-0 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
                            <div className="flex flex-col">
                                <div>&nbsp;</div>
                                <div>&nbsp;</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)))&nbsp;</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(((&nbsp;</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-----+&nbsp;</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|]&nbsp;</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`-----'</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___________&nbsp;&nbsp;</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`---------'&nbsp;</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-cyan-700 dark:text-cyan-300">air@airwu.dev</div>
                                <div>---------------</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">😊 Name:</span> Aaron Wu</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">🏫 Education:</span> UC Merced</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">📍 Location:</span> California</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">🔺 Uptime:</span> 19 years and counting</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">DE:</span> Gnome 46.3.1</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">WM:</span> Mutter</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">Shell:</span> fish 3.7.0</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">Terminal:</span> cloud</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">CPU:</span> AMD Ryzen 5 7640U</div>
                                <div><span className="text-cyan-700 dark:text-cyan-200">Memory:</span> 6003MiB / 31390MiB</div>
                            </div>
                        </div>
                        <div>&nbsp;</div>
                        <div className={`first-line flex flexrow transition-opacity delay-700 duration-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="text-cyan-700 dark:text-cyan-200">[air@airwu.dev:~]</div>
                            <div>$&nbsp;</div>
                            <div className="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-zinc-200 dark:before:bg-default-100 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black dark:after:bg-white">welcome to my website :)</div>
                        </div>
                    </div>
                </CardBody>
            </Card>

        </section>
  )
}

export default Terminal