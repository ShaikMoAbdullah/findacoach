"use client";
import { useEffect } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  const trustedOrganisations = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];
  const coaches = [
    {
      id: 1,
      name: "Alice",
      role: "Software Engineer",
      companyName: "ABC Tech",
    },
    { id: 2, name: "Bob", role: "Product Manager", companyName: "XYZ Corp" },
    {
      id: 3,
      name: "Charlie",
      role: "Data Analyst",
      companyName: "123 Solutions",
    },
    {
      id: 4,
      name: "David",
      role: "Marketing Specialist",
      companyName: "Global Marketing Group",
    },
    {
      id: 5,
      name: "Eva",
      role: "HR Manager",
      companyName: "HR Solutions Inc.",
    },
    {
      id: 6,
      name: "Frank",
      role: "Financial Analyst",
      companyName: "Finance Solutions LLC",
    },
    {
      id: 7,
      name: "Grace",
      role: "Customer Representative",
      companyName: "Customer Care Corp",
    },
    {
      id: 8,
      name: "Henry",
      role: "Operations Manager",
      companyName: "Operations Inc.",
    },
    {
      id: 9,
      name: "Ivy",
      role: "Graphic Designer",
      companyName: "Creative Designs Ltd.",
    },
    {
      id: 10,
      name: "Jack",
      role: "Sales Executive",
      companyName: "Sales Solutions",
    },
    {
      id: 11,
      name: "Kelly",
      role: "Project Coordinator",
      companyName: "Project Associates",
    },
    {
      id: 12,
      name: "Leo",
      role: "Quality Assurance Engineer",
      companyName: "Quality Services",
    },
  ];

  const stats = [
    { id: 1, count: "18000+", name: "EXPERTS" },
    { id: 2, count: "1000+", name: "1-1 COACHES" },
    { id: 3, count: "750+", name: "LIVE SESSIONS" },
    { id: 4, count: "500+", name: "VIDEOS" },
    { id: 5, count: "250+", name: "PODCASTS" },
    { id: 6, count: "200+", name: "BLOGS" },
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
          <div className="flex flex-wrap gap-8 w-5/6 overflow-scroll scroll-smooth justify-center items-center">
            {coaches.map((coach) => (
              <div
                key={coach.id}
                className="rounded-xl border border-gray-200 p-2 flex flex-col gap-2 w-1/5"
              >
                <Image
                  src={`/coaches/Coach_Carousal-${coach.id}.webp`}
                  alt="Coach"
                  width={300}
                  height={500}
                  className="rounded-xl"
                />
                <div>
                  <p className="font-semibold">{coach.name}</p>
                  <div className="text-sm">
                    <p>{coach.role}</p>
                    <p> {coach.companyName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-wrap w-screen justify-between items-center p-12 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 h-screen">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="border bg-pink-50 w-96 flex flex-col gap-8 p-12 justify-center items-center rounded-xl"
            >
              <Image
                src={`/stats/${stat.id}.png`}
                alt="image"
                width={100}
                height={100}
              />
              <p className="text-5xl font-extrabold">{stat.count}</p>
              <p>{stat.name}</p>
            </div>
          ))}
        </section>
        {/* <section className="text-center border-2 border-black flex flex-col gap-4">
          <p className="text-2xl font-semibold">HOW IT WORKS?</p>
          <p className="text-lg">
            Discover your path to action with{" "}
            <span className="font-semibold">Find a Coach™</span> – our platform
            guides you into motion through a few seamless steps
          </p>
        </section> */}
      </section>
    </div>
  );
}
