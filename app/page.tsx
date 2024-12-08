import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopPicks from "./components/TopPicks";
import NewArrivals from "./components/NewArrivals";
import OurBlogs from "./components/OurBlogs";

export default function Home() {
  return (
    <>
      <div className="hero h-auto bg-[var(--primary)]">
        <Navbar />
        <Hero />
      </div>
      {/* ---------- TABLE SECTION -------------- */}
      <div className="second-container h-auto flex  items-center bg-[#FAF4F4] py-[86px] justify-center gap-[7rem]">
        <div className="first">
          <img className="h-[40vh] w-[25vw]" src="/table.png" alt="" />
          <h1 className="poppins-regular text-[36px] leading-[96px]">
            Side Table
          </h1>
          <div className="view-btn text-[24px]">View More</div>
        </div>
        <div className="second">
          <img className="h-[40vh] w-[40vw]" src="/sofa.png" alt="" />
          <h1 className="poppins-regular text-[36px] leading-[96px]">
            Side Table
          </h1>
          <div className="view-btn text-[24px]">View More</div>
        </div>
      </div>
      {/* ---------- TOP PICKS SECTION -------------- */}
      <TopPicks />
      {/* ---------- NEW ARRIVALS SECTION -------------- */}
      <NewArrivals/>
      {/* ---------- BLOGS SECTION -------------- */}
      <OurBlogs/>
    </>
  );
}
