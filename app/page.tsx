import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default async function Home() {
  const { data } = await fetchData();

  console.log(data.story.content);
  return (
    <>
      <StoryblokStory story={data.story} />
      <div className="w-screen bg-black flex justify-center items-center">
        <div className="mt-12">
          <h2 className="text-white text-4xl text-center max-w-xl">
            Expert developer that is familiar with{" "}
            <span className="text-[#7568BA]">React</span>
          </h2>
          <div className="flex h-screen items-center justify-center">
            <div className="space-y-6 border-l-2 border-dashed border-slate-700">
              <div className="relative w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-[#7568BA]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="ml-6">
                  <h4 className="font-bold text-[#7568BA]">
                    Frontend Development.
                  </h4>
                  <p className="mt-2 max-w-screen-sm text-sm">
                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit,
                    laoreet sem in, lobortis ante.
                  </p>
                  <span className="mt-1 block text-sm font-semibold text-[#7568BA]">
                    2007
                  </span>
                </div>
              </div>
              <div className="relative w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-[#7568BA]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="ml-6">
                  <h4 className="font-bold text-[#7568BA]">Graphic Design.</h4>
                  <p className="mt-2 max-w-screen-sm text-sm">
                    Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                    turpis iaculis, feugiat risus quis, aliquet urna. Quisque
                    fringilla mollis risus, eu pulvinar dolor.
                  </p>
                  <span className="mt-1 block text-sm font-semibold text-[#7568BA]">
                    2007
                  </span>
                </div>
              </div>
              <div className="relative w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-[#7568BA]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="ml-6">
                  <h4 className="font-bold text-[#7568BA]">
                    Lead Ui/Ux Designer.
                  </h4>
                  <p className="mt-2 max-w-screen-sm text-sm">
                    Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                    turpis iaculis, feugiat risus quis, aliquet urna. Quisque
                    fringilla mollis risus, eu pulvinar dolor
                  </p>
                  <span className="mt-1 block text-sm font-semibold text-[#7568BA]">
                    2007
                  </span>
                </div>
              </div>
              <div className="relative w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-[#7568BA]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="ml-6">
                  <h4 className="font-bold text-[#7568BA]">
                    Lead Ui/Ux Designer.
                  </h4>
                  <p className="mt-2 max-w-screen-sm text-sm">
                    Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                    turpis iaculis, feugiat risus quis, aliquet urna. Quisque
                    fringilla mollis risus, eu pulvinar dolor
                  </p>
                  <span className="mt-1 block text-sm font-semibold text-[#7568BA]">
                    2007
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src="/JobSearch.png" width={700} height={700} alt="code" />
    </>
  );
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "published" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
