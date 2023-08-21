import React from 'react'
import Link from "next/link";
import { Navigation } from "../components/navigation";
import { Card } from "../components/card";
import { FiEye } from "react-icons/fi"


const projects = () => {
  return (<>
      <div className="relative pb-16">

			  <Navigation />

			  <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">

          <div className="max-w-2xl mx-auto lg:mx-0">
					  <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						  Projects
					  </h2>
					  <p className="mt-4 text-zinc-400">
						  Some of the projects are from work and some are on my own time.
					  </p>
				  </div>

				  <div className="w-full h-px bg-zinc-800" >

				  <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					  <Card>
						  <Link href={`/projects/somewhere`}>
							  <article className="relative w-full h-full p-4 md:p-8">
								  <div className="flex items-center justify-between gap-2">
									  <div className="text-xs text-zinc-100">
                      {/* {featured.date ? (
                        <time dateTime={new Date(featured.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(featured.date))}
                        </time>
                      ) : ( */}
											<span>SOON</span>
										  {/* )} */}
									  </div>
									  <span className="flex items-center gap-1 text-xs text-zinc-500">
										  <FiEye className="w-4 h-4" />{" "}
                      {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                        50000 ?? 0,
                      )}
									  </span>
								  </div>

								  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl 
                              font-display"
                  >
									  Featured title
								  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    Featured description
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
							  </article>
						  </Link>
					  </Card>
          </div>
        </div>
      </div>
    </div>
    </>)
}

export default projects