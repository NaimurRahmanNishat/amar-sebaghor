import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import aboutOne from "../../../public/aboutOne.png";
import aboutTwo from "../../../public/aboutTwo.png";
import aboutThree from "../../../public/aboutThree.png";
import aboutFour from "../../../public/aboutFour.png";
import about from "../../../public/aboutDoctor.png";
import Link from "next/link";

interface AboutData {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
}

const aboutData: AboutData[] = [
  {
    id: 1,
    img: aboutOne,
    title: "Health card validity for 5 year",
    description:
      "Selected family members will receive indoor and outdoor healthcare at our chosen hospital for the next five years. Discover the benefits in advance.",
  },
  {
    id: 2,
    img: aboutTwo,
    title: "OPD UPTO 40% OFF",
    description:
      "You will get up to 40% discount on outpatient test at our selected hospitals.",
  },
  {
    id: 3,
    img: aboutThree,
    title: "IPD UPTO 20% OFF",
    description:
      "You will get a discount of up to 20% on the total bill for inpatient treatment at our selected hospitals.",
  },
  {
    id: 4,
    img: aboutFour,
    title: "Good Health Starts With A Healthy Life",
    description:
      "Your health is our priority. We ensure the best medical care for you.",
  },
];

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
      {/* left side content start */}
      <div className="w-full md:w-[50%] flex flex-col">
        <h2 className="font-secondary text-lightGreen md:text-5xl text-2xl font-bold pt-8">
          About Us
        </h2>
        <div className="flex items-center">
          <h3 className="font-secondary text-lightGreen md:text-3xl text-sm font-medium pt-2 md:pt-8">
            Amar Sebaghar:{" "}
            <span className="font-secondary text-lightBlack md:text-3xl text-sm font-medium">
              Take care of you & your family health
            </span>
          </h3>
        </div>
        <div className="pt-4 md:pt-8 flex">
          <p className="text-lightBlack font-normal text-[16px] font-primary pb-4">
            "Amar Sebaghar" is a nonprofit service organization. We have started
            service work across the country with the slogan "Your health is our
            priority". Our main objective is to join together in health care for
            all. We have a list of hospitals across the country committed to
            providing low-cost healthcare. Our healthcare card plays a simple
            role in providing services that make a patient more motivated in
            healthcare.
          </p>
        </div>
        {/* grid layout start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8 md:pt-8">
          {aboutData.map((item) => (
            <div
              key={item.id}
              className="group perspective flex flex-col gap-4 items-start"
            >
              {/* Flip wrapper */}
              <div className="w-full flex md:justify-center">
                <div className="relative w-[50px] h-[50px] transform-style-preserve-3d transition-transform duration-[1200ms] group-hover:rotate-y-360">
                  <div className="absolute inset-0 backface-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <Image
                      src={item.img}
                      alt={`${item.title}-back`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-lightGreen">
                  {item.title}
                </h4>
                <p className="text-sm text-lightBlack">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* grid layout end */}
        <div className="pt-3 md:pt-8">
          <button className="border border-lightGreen text-white hover:bg-darkGreen bg-lightGreen px-4 py-2 rounded-sm font-semibold">
            <Link href="/register">Get Started</Link>
          </button>
        </div>
      </div>
      {/* left side content end */}

      {/* right side content start */}
      <div className="w-full md:w-1/2 shrink-0">
        <Image
          src={about}
          alt="about-image"
          className="object-contain w-full h-full"
        />
      </div>
      {/* right side content end */}
    </div>
  );
};

export default AboutSection;
