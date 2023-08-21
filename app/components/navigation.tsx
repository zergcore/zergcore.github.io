"use client";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs"

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "About", href: "/about" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					{/* <div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div> */}

			<nav className="my-2">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item, i) => (
            <li key={i}>
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
                {/* <span className="inline-block transition-transform group-hover:translate-x-1 
                                motion-reduce:transform-none">
                  <BsArrowRight/>
                </span> */}
						  </Link>
            </li>
					))}
				</ul>
			</nav>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<BsArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
