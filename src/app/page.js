import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="relative">
        <Image src="/home.webp" alt="home page" width={1500} height={1000} />
        <div className="absolute top-1/3 right-0 w-2/4 flex flex-col gap-4">
          <p className="text-5xl w-fit">One-on-one Coaching</p>
          <p className="text-5xl font-bold w-fit">For Your Teams!</p>
          <p className="font-medium text-2xl w-4/6">
            Personalized, measurable and scalable coaching program in India for
            the entire workforce.
          </p>
          <button className="bg-yellow-400 rounded text-black font-bold w-48 h-12">
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
        </div>
      </section>
      {/* <section>
        <p>Trusted by top organisations</p>
      </section> */}
    </div>
  );
}
