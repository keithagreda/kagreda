import ProfileDetail from "./profile-details/page";
import About from "./about/page";
import Experience from "./experience/page";
import Project from "./projects/page";
import Blob from "./blob/page";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 py-12 font-sans md:py-16 lg:py-0">
      <main className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left section (Profile) */}
        <div className="w-full pt-0 pb-0 md:pt-12 md:pb-12 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <ProfileDetail />
        </div>

        {/* Right section (Content) */}
        <div className="w-full flex flex-col gap-20 pt-0 pb-0 md:pt-12 md:pb-12 lg:w-[52%] max-h-screen md:overflow-auto scrollbar-hidden">
          <About />
          <Experience />
          <Project />
        </div>
      </main>
    </div>
    // <div className="scrollbar-hidden">
    //   <Blob />

    //   <div
    //     id="blur"
    //     style={{
    //       position: "fixed",
    //       height: "100%",
    //       width: "100%",
    //       zIndex: -2,
    //       backdropFilter: "blur(200px)",
    //     }}
    //   >

    //   </div>
    // </div>
  );
}
