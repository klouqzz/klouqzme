import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";

export default function Header() {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  let [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);
  const Items = [
    {
      label: "Home",
      redirect: "/",
      icons: { default: "fal fa-home", active: "fa fa-home" },
    },
    {
      label: "Projects",
      redirect: "/projects",
      icons: { default: "fal fa-compass", active: "fa fa-compass" },
    },
    {
      label: "Blogs",
      redirect: "/blogs",
      icons: { default: "fal fa-compass", active: "fa fa-compass" },
    },
    {
      label: "Repositories",
      redirect: "/repositories",
      icons: { default: "fal fa-compass", active: "fa fa-compass" },
    },
  ];
  const [scrolled, setScrolled] = useState({ currentScrollHeight: 0 });
  useEffect(() => {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (scrolled != newScrollHeight) {
        setScrolled({ currentScrollHeight: newScrollHeight });
      }
    };
    if (localStorage.getItem("dark") == "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode == true) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("dark");
    }
  }, [darkMode]);
  return (
    <>
      <div
        style={{ zIndex: 99 }}
        id="header-klouqz"
        className={`${
          scrolled?.currentScrollHeight > 70 &&
          "!py-4 shadow-xl bg-white dark:bg-black"
        } fixed px-6 lg:px-36 py-12 w-full transition-all duration-200`}
      >
        <div className="lg:grid lg:grid-cols-12 flex justify-between items-center w-full">
          <div className="col-span-3 w-full">
            <Link href="/">
              <p className="cursor-pointer font-semibold text-2xl dark:text-white">
                klouqz<span className="text-cIndigo">.me</span>
              </p>
            </Link>
          </div>
          <div className="hidden col-span-6 gap-x-4 w-full lg:flex justify-center">
            {Items.map((i, _) => (
              <Link href={i?.redirect} passHref key={_}>
                <div className="relative flex flex-col h-full items-center">
                  <p
                    className={`cursor-pointer transition-all duration-200 ${
                      router.asPath === i.redirect
                        ? "text-cIndigo font-semibold"
                        : "text-black/50 hover:text-black/100 dark:text-white dark:hover:text-gray-300 font-normal"
                    }`}
                  >
                    {i.label}
                  </p>
                  {router.asPath === i.redirect && (
                    <div className="bg-cIndigo h-0.5 w-[110%] rounded-t-xl absolute -bottom-2" />
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2 col-span-3 lg:w-full lg:flex justify-end">
            <div
              onClick={() => {
                setIsOpen(!isOpen);
                if (isOpen)
                  document.documentElement.classList.remove("overflow-hidden");
                if (!isOpen)
                  document.documentElement.classList.add("overflow-hidden");
              }}
              className="lg:hidden text-center w-10 h-10 text-center flex items-center justify-center text-white cursor-pointer transition-all duration-200 bg-cIndigo hover:opacity-90 px-6 py-2 rounded-md"
            >
              <i className="fa fa-bars" />
            </div>
            <Link href="/contact" passHref>
              <div className="text-center w-48 text-white cursor-pointer transition-all duration-100 bg-cIndigo hover:opacity-20 px-6 py-2 rounded-md">
                Contact me
              </div>
            </Link>
            <div
              className="w-10 h-10 flex items-center justify-center bg-cIndigo rounded-lg cursor-pointer transition-all duration-500 hover:opacity-20"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <svg
                  stroke="#ffffff"
                  fill="#ffffff"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                </svg>
              ) : (
                <svg
                  stroke="#ffffff"
                  fill="#ffffff"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        show={isOpen ? true : false}
        enter="transform transition-all duration-200"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transform transition-all duration-200"
        leaveTo="translate-x-full opacity-0"
        leaveFrom="translate-x-0 opacity-100"
      >
        <div
          style={{ zIndex: 9999 }}
          className="p-6 bg-zinc-100 h-full fixed w-full top-0 left-0"
        >
          <div className="flex justify-between w-full items-center">
            <p className="cursor-pointer font-semibold text-2xl">
              klouqz<span className="text-cIndigo">.</span>
            </p>
            <p
              onClick={() => {
                setIsOpen(!isOpen);
                document.documentElement.classList.remove("overflow-hidden");
              }}
              className="cursor-pointer hover:bg-zinc-300 transition-all duration-200 w-12 h-12 flex justify-center items-center bg-zinc-200 rounded-xl"
            >
              <i className="fal fa-times text-xl" />
            </p>
          </div>
          <div className="space-y-6 flex flex-col mt-6 w-full">
            {Items.map((i, _) => (
              <Link href={i?.redirect} passHref key={_}>
                <div className="relative flex flex-col h-full items-center">
                  <p
                    className={`cursor-pointer hover:bg-zinc-300  w-full h-full px-4 py-2 rounded-lg transition-all duration-200 ${
                      router.asPath === i.redirect
                        ? "text-cIndigo font-semibold"
                        : "text-black/50 hover:text-black/100 font-normal"
                    }`}
                  >
                    {i.label}
                  </p>
                  {router.asPath === i.redirect && (
                    <div className="bg-cIndigo h-full w-1 rounded-xl absolute left-0" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </>
  );
}
