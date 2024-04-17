"use client";
import { useEffect } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  const trustedOrganisations = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];
  const coaches = [
    { id: 1, name: "John", role: "Speaker" },
    { id: 2, name: "Sam", role: "Technical" },
  ];

  useEffect(() => {
    // Function to trigger automatic scroll on page load
    const autoScroll = () => {
      const container = document.querySelector(".scroll-container");
      if (container) {
        container.scrollLeft += 2; // Increment scroll position by 1 pixel
        // if (
        //   container.scrollLeft !==
        //   container.scrollWidth - container.clientWidth
        // ) {
        // If not reached the end of scroll, call autoScroll function again after a delay
        setTimeout(autoScroll, 50); // Adjust delay for desired scroll speed
        // }
      }
    };

    // Call autoScroll function after the component is mounted
    autoScroll();
  }, []);

  return (
    <div>
      <NavBar />
      <section className="flex flex-col gap-12">
        {/* <section className="h-screen flex flex-col gap-4 text-center justify-center items-center bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%"> */}
        <section className="h-screen flex flex-col gap-4 text-center justify-center items-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
          {/* <section className="h-screen flex flex-col gap-4 text-center justify-center items-center bg-gradient-to-r from-cyan-100 to-blue-100"> */}
          {/* <Image src="/home.webp" alt="home page" width={1500} height={1000} /> */}
          {/* <div className="w-2/4 flex flex-col gap-4"> */}
          <p className="text-6xl  font-semibold w-fit">One-on-one Coaching</p>
          <p className="text-6xl font-semibold w-fit">For Your Teams!</p>
          <p className="text-2xl w-4/6">
            Personalized, measurable and scalable coaching program in India for
            the entire workforce.
          </p>
          <button className="bg-black rounded text-white font-bold w-48 h-12 my-4">
            GET IN TOUCH
          </button>
          <p className="flex gap-2 justify-center items-center w-fit">
            <Image src="/globe.png" alt="Globe icon" width={30} height={30} />
            Asia&apos;s leading digital coaching platform
          </p>
          <p className="flex gap-2 justify-center items-center w-fit">
            <Image src="/userIcon.png" alt="User icon" width={30} height={30} />
            1000+ Coaches worldwide
          </p>

          {/* </div> */}
        </section>
        <section className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-semibold">TRUSTED BY TOP ORGANISATIONS</p>
          <div className="flex gap-8 w-5/6 overflow-scroll scroll-smooth scroll-container">
            {trustedOrganisations.map((item) => (
              <Image
                key={item}
                src={`/trustedOrganisations/${item}.webp`}
                alt="Trusted organisations"
                width={100}
                height={100}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-4">
          <p className="text-2xl font-semibold">ABOUT FIND A COACH</p>
          <p className="text-lg text-center w-3/4">
            <span className="font-semibold">Find a Coach™</span> is India&apos;s
            leading learning platform to book 1:1 Coaching with the most
            in-demand experts and for group learning via highly curated live
            learning sessions with some of the top global experts.
          </p>
          <div className="flex gap-8 w-5/6 overflow-scroll scroll-smooth"></div>
        </section>
      </section>
    </div>
  );
}
