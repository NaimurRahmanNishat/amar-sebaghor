
import logo from "../../../public/logo.png";
import {
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import payment from "../../../public/payment_gatway.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#021526] w-full h-full text-white">
        <div className="max-w-screen-xl container mx-auto px-4 md:px-0">
          <div className="text-white pt-12">
            <Image
              src={logo}
              alt=""
              className="w-48 h-20 bg-transparent filter invert brightness-0"
            />
          </div>
          {/* flex grid */}
          <div className="flex flex-col md:flex-row gap-4 pb-10 border-b-1">
            <div className="w-full md:w-[40%]">
              <p className="text-white font-normal pt-4 pb-4">
                "Amar Sebaghar" is a nonprofit service organization. We have
                started service work across the country with the slogan "Your
                health is our priority". Our main objective is to join together
                in health care for all. We have a list of hospitals across the
                country committed to providing low-cost healthcare. Our
                healthcare card plays a simple role in providing services that
                make a patient more motivated in healthcare.
              </p>
            </div>
            <div className="w-full md:w-[15%] flex flex-col md:items-center gap-4 pb-4">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg text-darkGreen">
                  Quick Link
                </h3>
                <Link
                  href="/login"
                  className="hover:text-lightGreen hover:underline"
                >
                  Login
                </Link>
                <Link
                  href="/about"
                  className="hover:text-lightGreen hover:underline"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-lightGreen hover:underline"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[15%]">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg text-darkGreen">
                  Privacy and Terms
                </h3>
                <Link
                  href="/privacy"
                  className="hover:text-lightGreen hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-lightGreen hover:underline"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/refund"
                  className="hover:text-lightGreen hover:underline"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[30%]">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg text-darkGreen">
                  Contact Info
                </h3>
                <div className="flex items-center gap-2">
                  <Phone />
                  <p className="hover:text-lightGreen hover:underline">
                    +8801568450889
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail />
                  <p className="hover:text-lightGreen hover:underline">
                    info@amarsebaghar.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin />
                  <p className="hover:text-lightGreen hover:underline">
                    152, East Tejturi Bazar, Tejgaon, Dhaka-1215
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FileText />
                  <p className="hover:text-lightGreen hover:underline">
                    Trade License Number: 029048
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 pb-12 overflow-x-hidden">
            <Image src={payment} alt="" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-12">
            <p>
              Copyright © 2025. All Rights Reserved By <span className="underline text-darkGreen">Amar Sebaghar</span>. Developed
              by <span className="text-orange-500 font-medium underline">PnH IT Solution</span>
            </p>
            <div className="flex md:justify-end gap-2 pt-4">
              <div className="p-2 rounded-full bg-white text-black cursor-pointer hover:bg-simpleGreen hover:text-white">
                <Instagram />
              </div>
              <div className="p-2 rounded-full bg-white text-black cursor-pointer hover:bg-simpleGreen hover:text-white">
                <Linkedin />
              </div>
              <div className="p-2 rounded-full bg-white text-black cursor-pointer hover:bg-simpleGreen hover:text-white">
                <Twitter />
              </div>
              <div className="p-2 rounded-full bg-white text-black cursor-pointer hover:bg-simpleGreen hover:text-white">
                <Facebook />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
