import ProfileDetail from "./profile-details/page";
import About from "./about/page";
import Experience from "./experience/page";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <main className="flex flex-col md:flex-row gap-8 row-start-2 items-center sm:items-start">
        <div className="sideBar mt-10 pt-24 pb-24">
          <ProfileDetail />
        </div>
        <div className="flex gap-5 flex-col pt-24 pb-24">
          <About />
          <Experience />
        </div>
      </main>
    </div>
  );
}
