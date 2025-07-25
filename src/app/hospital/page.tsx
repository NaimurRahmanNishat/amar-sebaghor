"use client";
import { SlidersVertical } from "lucide-react";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import scrollama from "scrollama";

import hospitalOne from "../../../public/hospital/hospitalOne.jpg";
import hospitalTwo from "../../../public/hospital/hospitalTwo.jpg";
import hospitalThree from "../../../public/hospital/hospitalThree.jpg";
import hospitalFour from "../../../public/hospital/hospitalFour.jpg";
import hospitalFive from "../../../public/hospital/hospitalFive.jpg";
import hospitalSix from "../../../public/hospital/hospitalSix.jpg";
import hospitalSeven from "../../../public/hospital/hospitalSeven.jpg";
import hospitalEight from "../../../public/hospital/hospitalEight.jpg";
import hospitalNine from "../../../public/hospital/hospitalNine.jpg";
import hospitalTen from "../../../public/hospital/hospitalTen.jpg";
import { MoveLeft, MoveRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import Image, { StaticImageData } from "next/image";

interface Hospital {
  id: number;
  name: string;
  image: StaticImageData;
  address: string;
}

const HospitalList: Hospital[] = [
  {
    id: 1,
    name: "Baridhara General Hospital Ltd.",
    image: hospitalOne,
    address: "Ka 51/1 Progoti Sharoni, Nadda, Dhaka, 1212",
  },
  {
    id: 2,
    name: "Dhaka Community Hospital",
    image: hospitalTwo,
    address:
      "190/1, Baro Moghbazar, Wireless Railgate, Dhaka-1217, Bangladesh.",
  },
  {
    id: 3,
    name: "Galachipa Upazila Health Complex",
    image: hospitalThree,
    address: "Galachipa Upazila Health Complex, phone 01716074580",
  },
  {
    id: 4,
    name: "Abedin General Hospital and Consultation Center",
    image: hospitalFour,
    address:
      "7/13, Block-B, Humayan Road, College Gate, Mohamadpur, Dhaka-1207, Bangladesh.",
  },
  {
    id: 5,
    name: "Abhoynagar Upazila Health Complex",
    image: hospitalFive,
    address: "Abhoynagar Upazila Health Complex phone: 01717582244",
  },
  {
    id: 6,
    name: "Abir General Hospital",
    image: hospitalSix,
    address: "18, New Eskaton Road (Nur Nogor) Dhaka, Bangladesh.",
  },
  {
    id: 7,
    name: "Ad-Din Akij Medical College Hospital",
    image: hospitalSeven,
    address: "Phone: +88017134884959",
  },
  {
    id: 8,
    name: "Ad-din Hospital Kushtia",
    image: hospitalEight,
    address: "19/1 Chand Mohammad Sarak Thanapara, Kushtia",
  },
  {
    id: 9,
    name: "Ad-din Medical College Hospital",
    image: hospitalNine,
    address: "2 Bara Maghbazar, Dhaka-1217",
  },
  {
    id: 10,
    name: "Ad-din medical college hospital",
    image: hospitalTen,
    address:
      "2, Bara Maghbazar, Dhaka-1217. Phone: 096-12345666, 01987 77 77 77,01713-488418 (24 hrs Manager).",
  },
];

const Divisions = [
  "Dhaka",
  "Chittagong",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

const Districts = [
  "Dhaka",
  "Faridpur",
  "Gazipur",
  "Gopalganj",
  "Jamalpur",
  "Kishoreganj",
  "Madaripur",
  "Manikganj",
  "Munshiganj",
  "Mymensingh",
  "Narayanganj",
  "Narsingdi",
  "Netrokona",
  "Rajbari",
  "Shariatpur",
  "Sherpur",
  "Tangail",
  "Bogra",
  "Joypurhat",
  "Naogaon",
  "Natore",
  "Nawabganj",
  "Pabna",
  "Rajshahi",
  "Sirajgonj",
  "Dinajpur",
  "Gaibandha",
  "Kurigram",
  "Lalmonirhat",
  "Nilphamari",
  "Panchagarh",
  "Rangpur",
  "Thakurgaon",
  "Barguna",
  "Barisal",
  "Bhola",
  "Jhalokati",
  "Patuakhali",
  "Pirojpur",
  "Bandarban",
  "Brahmanbaria",
  "Chandpur",
  "Chittagong",
  "Comilla",
  "Cox's Bazar",
  "Feni",
  "Khagrachari",
  "Lakshmipur",
  "Noakhali",
  "Rangamati",
  "Habiganj",
  "Maulvibazar",
  "Sunamganj",
  "Sylhet",
  "Bagerhat",
  "Chuadanga",
  "Jessore",
  "Jhenaidah",
  "Khulna",
  "Kushtia",
  "Magura",
  "Meherpur",
  "Narail",
  "Satkhira",
];

const page = () => {
  const [isOpenDistrict, setIsOpenDistrict] = useState<boolean>(true);
  const [isOpenDevision, setIsOpenDivision] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>(HospitalList);

  const handleOpenClickDistrict = () => {
    setIsOpenDistrict(!isOpenDistrict);
  };

  const handleOpenClickDevision = () => {
    setIsOpenDivision(!isOpenDevision);
  };

  // Search functionality
  useEffect(() => {
    const results = HospitalList.filter(hospital =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHospitals(results);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchTerm]);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(filteredHospitals.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentHospitals = filteredHospitals.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // side scroll
  const scrollyRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const scroller = useRef(scrollama());

  useEffect(() => {
    const handleResize = () => {
      const stepHeight = Math.floor(window.innerHeight * 0.9);
      stepsRef.current.forEach((step) => {
        if (step) step.style.height = `${stepHeight}px`;
      });
      const figure = figureRef.current;
      if (figure) {
        const isMobile = window.innerWidth < 768;
        const figureHeight = isMobile
          ? window.innerHeight * 3.5
          : window.innerHeight * 1.6;
        const figureMarginTop = (window.innerHeight - figureHeight) / 2;
        figure.style.height = `${figureHeight}px`;
        figure.style.top = `${figureMarginTop}px`;
      }
      scroller.current.resize();
    };
    const handleStepEnter = (response: any) => {
      stepsRef.current.forEach((step, i) => {
        if (step) {
          step.classList.toggle("is-active", i === response.index);
        }
      });
      if (figureRef.current) {
        const p = figureRef.current.querySelector("p");
        if (p) p.textContent = String(response.index + 1);
      }
    };
    handleResize();
    scroller.current
      .setup({
        step: "#scrolly .step",
        debug: false,
      })
      .onStepEnter(handleStepEnter);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="md:pt-20 pt-12 md:pb-20 pb-12">
      <h1 className="font-secondary text-center text-lightGreen md:text-5xl text-2xl font-bold">
        Hospitals List
      </h1>
      <div className="md:pt-12 pt-4 ">
        <input
          type="text"
          placeholder="Search Hospital"
          className="w-full md:w-1/2 mx-auto  px-4 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lightGreen"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="pt-12 flex flex-col md:flex-row gap-4">
        <div
          id="scrolly"
          ref={scrollyRef}
          className="relative flex flex-col md:flex-row gap-5"
        >
          {/* left side content */}
          <div className="md:w-[25%] w-full mx-auto">
            <div className="bg-gray-100">
              <div>
                <div className="pt-4 px-4 grid gap-4 py-4">
                  <div
                    onClick={handleOpenClickDistrict}
                    className="flex items-center gap-2 justify-between cursor-pointer"
                  >
                    <h3 className="font-semibold text-lg">Division wise</h3>
                    <SlidersVertical size={20} className="cursor-pointer" />
                  </div>
                  {isOpenDistrict &&
                    Divisions.map((division, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input type="checkbox" />
                        <p>{division}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <div className="pt-10 px-4 grid gap-4 py-4">
                  <div
                    onClick={handleOpenClickDevision}
                    className="flex items-center gap-2 justify-between cursor-pointer"
                  >
                    <h3 className="font-semibold text-lg">District wise</h3>
                    <SlidersVertical size={20} className="cursor-pointer" />
                  </div>
                  {isOpenDevision &&
                    Districts.map((district, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input type="checkbox" />
                        <p>{district}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* right side content */}
          <div className="md:w-[75%] w-full mx-auto">
            <div
              ref={figureRef}
              className="sticky w-full top-0"
            >
              {currentHospitals.length > 0 ? (
                currentHospitals.map((hospital) => (
                  <div className="pb-12 step" key={hospital.id}>
                    <div className="flex flex-col md:flex-row gap-12">
                      <div className="w-full md:w-1/4">
                        <Image
                          src={hospital.image}
                          alt={hospital.name}
                          className="w-full"
                        />
                      </div>
                      <div className="w-full md:w-3/4">
                        <h2 className="text-2xl font-semibold">
                          {hospital.name}
                        </h2>
                        <p className="py-2">{hospital.address}</p>
                        <div className="pt-12">
                          <button className="px-4 py-2 bg-simpleGreen font-medium hover:bg-darkGreen text-white cursor-pointer">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl">No hospitals found matching your search.</p>
                </div>
              )}

              {/* Pagination Controls - Only show if there are results */}
              {filteredHospitals.length > 0 && (
                <div className="flex justify-center gap-2 mt-4 mb-10">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <button
                          onClick={handlePrevPage}
                          disabled={currentPage === 1}
                          className={`px-2 py-2 border cursor-pointer rounded ${
                            currentPage === 1
                              ? "text-gray-400 disabled:opacity-30 cursor-not-allowed"
                              : "text-black"
                          }`}
                        >
                          <MoveLeft size={16} className="text-red-600" />
                        </button>
                      </PaginationItem>
                      {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index}>
                          <button
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 border rounded ${
                              currentPage === index + 1
                                ? "bg-[#198754] text-white"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            {index + 1}
                          </button>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <button
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                          className={`px-2 py-2 border cursor-pointer rounded ${
                            currentPage === totalPages
                              ? "text-gray-400 disabled:opacity-30 cursor-not-allowed"
                              : "text-black"
                          }`}
                        >
                          <MoveRight size={16} className="text-red-600" />
                        </button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;