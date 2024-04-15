import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <div className="w-1/4 flex justify-center items-center">
          <Image
            src="/findacoachLogo.png"
            alt="find a coach logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex justify-end items-center gap-7 w-2/4 h-full font-medium">
          <span className="cursor-pointer">HOME</span>
          <span className="cursor-pointer">COACHES</span>
          <span className="cursor-pointer">CATEGORIES</span>
          <span className="cursor-pointer">REGISTER AS COACH</span>
          <span className="cursor-pointer">BLOG</span>
          <span className="cursor-pointer">CONTACT US</span>
        </div>
      </header>
      <div className="relative">
        <Image src="/home.webp" alt="home page" width={1500} height={1000} />
      </div>
    </div>
  );
}
