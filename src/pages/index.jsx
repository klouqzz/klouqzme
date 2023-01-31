import { Transition } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import swr from "../libraries/swr";
import Typewriter from "typewriter-effect/dist/core";
import Tippy from "@tippyjs/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Home({ better }) {
  const router = useRouter();
  let [showTechs, setShowTechs] = useState(false);

  const { data: _repos } = swr("/api/repos");
  const repos = _repos ? _repos : null;
  const { data: _techs } = swr("/api/techs");
  const techs = _techs ? _techs : null;

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: 0, y: 12 },
  };
  return (
    <>
      <div></div>
      <center>
        <div id="">
          <div></div>

          <img
            className="mt-7"
            draggable="false"
            id="aboutMeModalAvatar"
            src="https://cdn.discordapp.com/attachments/837060599031791678/1070059650109681734/0c12aa294639215e0f4a11822865b7c6.jpg"
            alt="west"
            style={{ width: 160, height: 160, borderRadius: 400 / 2 }}
          />
        </div>
      </center>
      <div className="relative px-6 py-24 lg:py-8 lg:px-36 lg:py-12 lg:pb-96 flex flex-col items-center justify-center">
        <h1 className="font-semibold text-4xl break-words max-w-2xl text-center dark:text-white">
          Howdy, I'm
          <span className="text-cIndigo"> Klouqz</span>. I'm interested in
          <span className="text-cIndigo"> designing </span>
          and
          <span className="text-cIndigo"> developing. </span>
        </h1>
      </div>

      <div className="px-6 lg:px-36 h-full py-36 pt-72">
        <div id="title-repos" className="relative">
          <p
            style={{ zIndex: 1 }}
            className="relative ml-2 text-3xl lg:text-6xl font-semibold dark:text-gray-300"
          >
            Repositories
          </p>
          <p className="hidden lg:block absolute bottom-5 opacity-10 ml-2 text-8xl font-semibold dark:text-white">
            Repositories
          </p>
          <div className="h-3 lg:h-6 w-2/4 -mt-2 lg:-mt-4 opacity-20 bg-cIndigo rounded-xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-6 mt-6">
          {_repos ? (
            repos && (
              <>
                {repos
                  ?.slice(0, 8)
                  ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
                  ?.map((_, __) => (
                    <a
                      key={__}
                      href={`https://github.com/klouqzz`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-zinc-100 p-6 hover:bg-zinc-700/10 h-auto text-black transition-all duration-200 rounded-lg w-full"
                    >
                      <p className="text-sm">
                        <span className="text-sm text-black bg-zinc-500/20 px-2 py-1 rounded-md mr-1">
                          {_.owner.login}
                        </span>
                        {_.name}
                      </p>
                      <div className="flex justify-end w-full h-full items-center">
                        <div className="flex w-full justify-between items-center">
                          <Tippy
                            content={"Stargazers"}
                            arrow={true}
                            animation="shift-away"
                          >
                            <div className="flex items-center">
                              <p className="text-sm">
                                <i className="fal fa-star mr-2" />
                              </p>
                              <p>{_.stargazers_count}</p>
                            </div>
                          </Tippy>
                          <div className="text-sm text-black bg-zinc-200 px-2 py-1 rounded-md mr-1">
                            {_.language || "Empty"}
                          </div>
                          <Tippy
                            content={"Forks"}
                            arrow={true}
                            animation="shift-away"
                          >
                            <div className="flex items-center justify-end">
                              <p>{_.forks}</p>
                              <p className="text-sm">
                                <i className="fal fa-code-branch ml-2" />
                              </p>
                            </div>
                          </Tippy>
                        </div>
                      </div>
                    </a>
                  ))}
              </>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-center w-full">
          <Link href="/repositories" passHref>
            <button className="bg-zinc-200/50 hover:bg-zinc-200/100 transition-all duration-200 w-1/4 mt-5 py-2 rounded-xl">
              Show More
            </button>
          </Link>
        </div>

        <div
          id="title-repos"
          className="relative mt-72 flex items-end w-full flex-col"
        >
          <p
            style={{ zIndex: 2 }}
            className="relative ml-2 text-3xl lg:text-6xl font-semibold dark:text-gray-300"
          >
            Technologies
          </p>
          <p className="hidden lg:block absolute bottom-5 opacity-10 ml-2 text-8xl font-semibold dark:text-white">
            Technologies
          </p>
          <div className="h-3 lg:h-6 w-2/4 -mt-2 lg:-mt-4 opacity-20 bg-cIndigo rounded-xl" />
        </div>
        {_techs ? (
          techs && (
            <>
              <motion.tbody
                initial="hidden"
                animate="visible"
                variants={list}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-6 mt-6"
              >
                {techs?.map((_, __) => (
                  <motion.tr
                    variants={item}
                    key={__}
                    className="flex items-center justify-between w-full transition-all duration-200 bg-zinc-100/50 hover:bg-zinc-200/50 dark:bg-[rgba(0,0,0,.6)] dark:hover:bg-[rgba(0,0,0,.7)] p-3 rounded-xl cursor-pointer hover:scale-[1.02] border-2 border-solid border-transparent dark:hover:border-cIndigo"
                  >
                    <img
                      width="32"
                      className="max-w-[32px] w-[32px] flex-shrink-0 h-[32px] rounded-lg"
                      src={_.src}
                    />
                    <p className="font-medium dark:text-gray-400">{_.name}</p>
                  </motion.tr>
                ))}
              </motion.tbody>
            </>
          )
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-6 mt-6">
              {Array.from({ length: 20 }).map((index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full transition-all duration-200 bg-zinc-100/50 hover:bg-zinc-200/50 p-3 rounded-xl cursor-pointer hover:scale-[1.02]"
                >
                  <div className="bg-zinc-200 w-[32px] h-[32px] animate-pulse rounded-lg" />
                  <div className="bg-zinc-200 w-2/4 animate-pulse h-6 rounded-md" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
