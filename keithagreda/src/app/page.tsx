import ProfileDetail from "./profile-details/page";
import About from "./about/page";
import Experience from "./experience/page";
import Project from "./projects/page";
import Blob from "./blob/page";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <Blob />
      <main className="flex flex-col md:flex-row gap-8 row-start-2 items-center sm:items-start">
        <div className="sideBar mt-10 pt-24 pb-24 x-2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 ">
          <ProfileDetail />
        </div>
        <div className="flex gap-20 flex-col pt-24 pb-24 lg:w-[52%]">
          <About />
          <Experience />
          <Project />
        </div>
      </main>
    </div>
  );
}
