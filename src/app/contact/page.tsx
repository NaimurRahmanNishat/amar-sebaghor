import { Mail, MapPin, Phone, Receipt } from "lucide-react";
import React from "react";
import FaqSection from "../about/FaqSection";

const page = () => {
  return (
    <div>
      <section className="md:py-24 py-12 flex flex-col md:flex-row gap-4">
        {/* left side content start */}
        <div className="md:w-1/2 w-full mx-auto">
          <h3 className="text-3xl font-bold text-lightBlack font-secondary md:pt-10 pb-4">
            Contact Us
          </h3>
          <p className="text-lightBlack text-[15px] font-primary">
            Contact us if you have any questions, suggestions, feedback or
            complaints. You can reach us by email, phone or contact form. We are
            always happy to hear from you and we will do our best to respond as
            soon as possible.
          </p>
          <div className="pt-16">
            <div className="flex items-center gap-2">
              <Phone className="text-blue-600" />
              <p className="text-lightGreen text-[20px] font-primary">
                +8801568450889
              </p>
            </div>
            <div className="pt-3 flex items-center gap-2 pb-3">
              <Mail className="text-blue-600" />
              <p className="text-lightGreen text-[20px] font-primary">
                info@amarsebaghar.com
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <MapPin className="text-red-600" />
              <p className="text-lightGreen text-[20px] font-primary">
                {" "}
                152, East Tejturi Bazar, Tejgaon, Dhaka-1215
              </p>
            </div>
            <div className="pt-3 flex items-center gap-2">
              <Receipt className="text-blue-600" />
              <p className="text-lightGreen text-[20px] font-primary">
                {" "}
                Trade License Number: 029048
              </p>
            </div>
          </div>
        </div>
        {/* right side content start */}
        <div className="md:w-1/2 w-full mx-auto">
          <div className="w-full bg-gradient-to-r from-violet-50 to-orange-50 md:px-12 px-3 py-6 md:py-20 rounded">
            <form>
              <div className="pb-4">
                <label className="font-bold text-lg text-lightGreen">
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="bg-white py-2 border outline-none px-2 rounded-sm w-full focus:border-simpleGreen"
                />
              </div>
              <div className="pb-4">
                <label className="font-bold text-lg text-lightGreen">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="bg-white py-2 border outline-none px-2 rounded-sm w-full focus:border-simpleGreen"
                />
              </div>
              <div className="pb-4">
                <label className="font-bold text-lg text-lightGreen">
                  Subject<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="bg-white py-2 border outline-none px-2 rounded-sm w-full focus:border-simpleGreen"
                />
              </div>
              <div className="pb-8">
                <label className="font-bold text-lg text-lightGreen">
                  Message<span className="text-red-600">*</span>
                </label>
                <textarea
                  rows={5}
                  className="bg-white py-2 border outline-none px-2 rounded-sm w-full focus:border-simpleGreen"
                />
              </div>
              <button className="border cursor-pointer border-lightGreen text-white hover:bg-darkGreen bg-lightGreen px-3 py-2 rounded-sm font-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="md:pb-20 pb-6">
        <FaqSection />
      </section>
    </div>
  );
};

export default page;
