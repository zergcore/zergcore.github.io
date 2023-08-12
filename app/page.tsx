import Image from 'next/image'
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { BsArrowRight } from "react-icons/bs"

const navigation = [
	{ name: "Portfolio", href: "/projects" },
	{ name: "About", href: "/projects" },
	{ name: "Blog", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono 
                      text-sm lg:flex"
      >
        <p className="fixed left-0 top-0 flex w-full justify-center border-b 
                    border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 
                    backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 
                    dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border 
                    lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Contact&nbsp;
          <code className="font-mono font-bold">me</code>
        </p>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}IMAGE
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> 
          </a>
        </div> */}
      </div>
      
      <nav className="my-16 animate-fade-in">
			</nav>
      
      <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
			/>

      <div className="relative flex place-items-center before:absolute
                      before:h-[300px] before:w-[480px] before:-translate-x-1/2
                      before:rounded-full before:bg-gradient-radial
                      before:from-white before:to-transparent before:blur-2xl
                      before:content-[''] after:absolute after:-z-20 after:h-[180px]
                      after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic
                      after:from-sky-200 after:via-blue-200 after:blur-2xl
                      after:content-[''] before:dark:bg-gradient-to-br
                      before:dark:from-transparent before:dark:to-blue-700
                      before:dark:opacity-10 after:dark:from-sky-900
                      after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]
                      z-[-1]"
      >
        <h1
          className="z-10 text-2xl text-transparent duration-1000
                    bg-white cursor-default text-edge-outline
                    animate-title font-display sm:text-5xl md:text-8xl
                    whitespace-nowrap bg-clip-text"
        >
				  ZaidibethRamos
			  </h1>
      </div>

      <nav className="my-2 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="group rounded-lg border border-transparent px-5 py-4
                        transition-colors text-zinc-500 hover:text-zinc-300
                        hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 
                        hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
						>
							{item.name} {' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 
                              motion-reduce:transform-none">
                <BsArrowRight/>
              </span>
						</Link>
					))}
				</ul>
			</nav>
    </main>
  )
}
