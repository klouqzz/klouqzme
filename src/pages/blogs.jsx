import swr from "../libraries/swr"

export default function Projects() {
  const { data: _projects } = swr('/api/blogs');
  const projects = _projects ? _projects : null;
  const ProjectSkeleton = () => {
    return <>
      <div className="cursor-pointer w-full bg-zinc-100/90 p-4 rounded-lg hover:scale-[1.02] transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-200/50">
        <div className="bg-zinc-300 w-full h-32 rounded-lg animate-pulse" />
        <div className="bg-zinc-300 w-3/4 h-6 mt-4 rounded-lg animate-pulse" />
        <div className="bg-zinc-300 w-full mt-3 h-24 rounded-lg animate-pulse" />
      </div>
    </>
  };
  return <>
    <div className="px-6 lg:px-36 h-full py-36 pt-24">
      <div id="title-repos" className="relative">
        <p style={{ zIndex: 2 }} className="relative ml-2 text-3xl lg:text-6xl font-semibold dark:text-gray-300">Blogs</p>
        <p className="hidden lg:block absolute bottom-5 opacity-10 ml-2 text-8xl font-semibold dark:text-white">Blogs</p>
        <div className="h-3 lg:h-6 w-2/4 -mt-2 lg:-mt-4 opacity-20 bg-cIndigo rounded-xl" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-6 mt-6">

        {_projects ? (
          projects ? (
            projects?.map((p, i) => (
              <a href={p?.link} target="_blank" key={i} className="cursor-pointer w-full bg-zinc-100/90 p-4 rounded-lg hover:scale-[1.02] transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-200/50 dark:bg-[rgba(0,0,0,.7)] dark:border-2 dark:border-solid dark:border-transparent dark:hover:border-cIndigo">
                <div className="mt-4">
                  <p className="text-xl font-semibold dark:text-white">{p?.name}</p>
                  &nbsp;
                  <p className="text-sm overflow-auto font-normal dark:text-gray-300">{p?.description}</p>
                  &nbsp;
                  <div></div>
                  <img src={p.image} className="h-32 shadow-lg rounded-lg" />
                </div>


              </a>
            ))
          ) : <></>
        ) : Array.from({ length: 8 }).map((_, index) => <ProjectSkeleton key={index} />)}

      </div>
    </div>
  </>
}