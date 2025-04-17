"use client";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import usa from "../../../public/us.jpg";
import bangladesh from "../../../public/bd.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";

interface INavLink {
  name: string;
  href: string;
}

const navLinks: INavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
  { name: "Hospital", href: "/hospital" },
  { name: "Login", href: "/login" },
];

const StickyNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [language, setLanguage] = useState("en");
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const openMobileHandleClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`md:h-24 h-16 flex items-center justify-between transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "bg-white shadow-lg translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0"
        }
        fixed top-0 left-0 w-full`}
    >
      <div className="container mx-auto px-4 md:px-0 max-w-screen-xl flex items-center justify-between">
        <button onClick={() => setOpenMobileMenu(false)}>
          <Link href="/">
            <Image src={logo} alt="logo-image" priority className="w-44 h-16" />
          </Link>
        </button>

        {/* desktop header menu start */}
        <nav className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <li
                key={item.href}
                className="font-bold text-lg font-primary text-lightGreen"
              >
                <Link
                  href={item.href}
                  className={`hover:text-lightGreen transition-all ease-in-out duration-300 relative group ${
                    pathname === item?.href && "text-darkRed"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-9.5 left-1/2 w-0 h-1 bg-lightGreen group-hover:w-1/2 group-hover:left-0 transition-all ease-in-out duration-300 ${
                      pathname === item?.href && "w-1/2"
                    }`}
                  />
                  <span
                    className={`absolute -bottom-9.5 right-1/2 w-0 h-1 bg-lightGreen group-hover:w-1/2 group-hover:right-0 transition-all ease-in-out duration-300 ${
                      pathname === item?.href && "w-1/2"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Link href="/register">
              <Button className="bg-lightGreen cursor-pointer hover:bg-darkGreen">
                Get Started
              </Button>
            </Link>
            {/* language setup start */}
            <div>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[100px]">
                  <div className="flex items-center gap-2">
                    {language === "en" ? (
                      <div className="flex items-center gap-2">
                        <Image
                          src={usa}
                          alt=""
                          className="w-6 h-4 rounded-xs"
                        />
                        <span className="font-bold text-lightGreen">EN</span>
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <Image
                          src={bangladesh}
                          alt=""
                          className="w-6 h-4 rounded-xs"
                        />{" "}
                        <span className="font-bold text-lightGreen">BN</span>
                      </div>
                    )}
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="en">
                      <div className="flex items-center gap-2">
                        <Image
                          src={usa}
                          alt=""
                          className="w-6 h-4 rounded-xs"
                        />
                        <span className="font-bold text-lightGreen">EN</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="bn">
                      <div className="flex items-center gap-2">
                        <Image
                          src={bangladesh}
                          alt=""
                          className="w-6 h-4 rounded-xs"
                        />{" "}
                        <span className="font-bold text-lightGreen">BN</span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* language setup end */}
          </div>
        </nav>
        {/* desktop header menu end */}

        {/* mobile icons start */}
        <div
          className="md:hidden flex items-center gap-4"
          onClick={openMobileHandleClick}
        >
          {openMobileMenu ? (
            <button>
              <X className="text-lightGreen transition-all duration-300 ease-in-out" />
            </button>
          ) : (
            <button>
              <AlignJustify className="text-lightGreen transition-all duration-300 ease-in-out" />
            </button>
          )}
        </div>
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-md z-50 px-4 py-6 md:hidden transform transition-all duration-300 ease-in-out ${
            openMobileMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="flex gap-2 items-center justify-between">
            {/* Language Select for mobile start */}
            <div>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[100px]">
                  <div className="flex items-center gap-2">
                    {language === "en" ? (
                      <div className="flex items-center gap-2">
                        <Image
                          src={usa}
                          alt="USA Flag"
                          className="w-6 h-4 rounded-xs"
                        />
                        <span>EN</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Image
                          src={bangladesh}
                          alt="BD Flag"
                          className="w-6 h-4 rounded-xs"
                        />
                        <span>BN</span>
                      </div>
                    )}
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="en">
                      <div className="flex items-center gap-2">
                        <Image
                          src={usa}
                          alt="USA Flag"
                          className="w-6 h-4 rounded-xs"
                        />
                        <span>EN</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="bn">
                      <div className="flex items-center gap-2">
                        <Image
                          src={bangladesh}
                          alt="BD Flag"
                          className="w-6 h-4 rounded-xs"
                        />
                        <span>BN</span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Language Select for mobile end */}
            <Link href="/register" onClick={() => setOpenMobileMenu(false)}>
              <Button className="bg-lightGreen w-full hover:bg-darkGreen">
                Get Started
              </Button>
            </Link>
          </div>
          <ul className="flex flex-col gap-4 mt-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpenMobileMenu(false)}
                className={`text-lg font-bold pb-2 border-b-2 w-full text-lightGreen font-primary cursor-pointer transform transition-transform duration-300 ease-in-out hover:translate-x-2 ${
                  pathname === item.href ? "text-darkRed" : "text-lightGreen"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        {/* mobile icons end */}
      </div>
    </header>
  );
};

export default StickyNavbar;
