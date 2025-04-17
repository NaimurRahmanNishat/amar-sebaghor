import Image from "next/image";
import home from "../../../public/home.jpg";
import hero from "../../../public/heroDoctor.jpg";
import Link from "next/link";
import herol from "../../../public/herol.png";

const HeroSection = () => {
  return (
    <main className="flex flex-col md:flex-row gap-4 md:gap-8">
      {/* left side content */}
      <div className="w-full md:w-[48%] flex flex-col shrink-0 md:pt-28">
        <div className="flex gap-2 items-center">
          <p className="md:text-2xl text-sm font-medium text-lightGreen">
            Take care of your family health
          </p>
          <Image
            src={home}
            alt="home-image"
            className="md:w-12 w-8 md:h-12 h-8"
          />
        </div>
        <h1 className="font-secondary text-lightGreen md:text-5xl text-2xl font-bold pt-1">
          Amar Sebaghar
        </h1>
        <h4 className="md:pt-12 pt-4 text-lightBlack font-medium md:text-xl text-pretty">
          Only those who are between 18 to 60 years of age can get health care
          card. The cardholder's wife/husband and two children below the age of
          18 years can avail the services of the health cards.
        </h4>
        {/* button section start */}
        <div className="flex gap-4 pt-4 md:pt-10">
          <button className="border border-lightGreen text-white hover:bg-darkGreen bg-lightGreen px-3 py-2 rounded-sm font-semibold">
            <Link href="/register">Get Coverage</Link>
          </button>
          <button className="relative overflow-hidden border border-lightGreen text-lightGreen px-3 py-2 rounded-sm font-semibold group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              <Link href="/about">Learn More</Link>
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-lightGreen transition-all text-white duration-[300ms] group-hover:w-full z-0"></span>
          </button>
        </div>
        {/* button section end */}
        <div className="flex gap-2 pt-4 md:pt-12">
          <Image
            src={herol}
            alt="home-image"
            className="md:w-48 w-32 md:h-16 h-12"
          />
          <h3 className="flex items-center md:text-4xl text-2xl font-semibold text-red-600">
            5000+{" "}
            <span className="text-black/65 md:pt-4 text-[20px]">
              Happy Customer
            </span>
          </h3>
        </div>
      </div>
      {/* right side content */}
      <div className="w-full md:w-1/2">
        <div className="w-full h-full">
          <Image src={hero} alt="home-image" className="w-full h-full" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
