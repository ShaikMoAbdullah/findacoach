import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 sticky top-0 z-10 bg-white">
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
  );
};

export default Header;
