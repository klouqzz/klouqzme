import Link from "next/link";

const Footer = ({ better }) => {
  return (
    <>
      <div className="bg-zinc-200/20 dark:bg-[#222222] bg-opacity-95 dark:bg-opacity-95 w-full px-6 lg:px-12 py-6">
        {}
        <div className="lg:flex justify-between w-full">
          <Link href="/">
            <p className="cursor-pointer flex items-center font-semibold text-2xl dark:text-gray-300">
              <span className="bg-zinc-200 dark:bg-[rgba(0,0,0,.5)] text-xs px-2 py-1 mr-2 rounded-lg dark:text-gray-200">
                v1.8
              </span>
              klouqz
              <span style={{ zIndex: 4 }} className="relative text-cIndigo">
                .
              </span>
            </p>
          </Link>
          <div className="lg:flex space-x-6 items-center">
            <div className="text-left mt-2 lg:mt-0 lg:text-right dark:text-gray-100">
              <p>
                <center>Rebuilded with ❤️ by klouqz</center>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-indigo-500 w-full py-1 dark:bg-neutral-700"></div>
    </>
  );
};

export default Footer;
