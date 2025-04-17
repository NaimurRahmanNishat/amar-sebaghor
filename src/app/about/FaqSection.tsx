import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
      {/* left side content */}
      <div className="w-full md:w-[50%] flex flex-col items-start">
        <div>
        <h2 className="font-secondary text-lightGreen md:text-5xl text-2xl font-bold md:text-start">
          FAQ's
        </h2>
        <h3 className="font-secondary text-lightBlack md:text-3xl text-sm font-medium md:pt-10 pt-3">
          Frequently Asked <span className="text-lightGreen ">Questions</span>
        </h3>
        <p className="text-lightBlack font-normal text-[16px] font-primary pb-4 md:pt-6 pt-2">
          Frequently Asked Questions
        </p>
        <h3 className="font-secondary text-lightBlack md:text-2xl text-sm font-medium md:pt-8 pt-2">
          Couldn't find what you were looking for? Write to us at
        </h3>
        <p className="underline text-blue-600 md:text-xl text-sm md:pt-4 pt-2">
          support@amarsebaghar.com
        </p>
        </div>
      </div>
      {/* right side content */}
      <div className="w-full md:w-[50%] h-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Why should members of the ABC fill out vote justification forms
              explaining their votes?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 px-2 py-1">
              The standard definition of a quorum in Robert's Rules of Order is
              that the majority of an assembly must be present to conduct
              business. That is, if there are twenty members of a group, eleven
              must be present to constitute a quorum. The same requirement for a
              quorum applies to ABCs, with one additional provision. The
              Handbook (4.1.8.3) provides that absentee votes will be counted in
              ABCs, whereas Robert's Rules really do not provide for a mixture
              of absentee and in-person votes in an assembly
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can absentee ballots be cast?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 px-2 py-1">
              The standard definition of a quorum in Robert's Rules of Order is
              that the majority of an assembly must be present to conduct
              business. That is, if there are twenty members of a group, eleven
              must be present to constitute a quorum. The same requirement for a
              quorum applies to ABCs, with one additional provision. The
              Handbook (4.1.8.3) provides that absentee votes will be counted in
              ABCs, whereas Robert's Rules really do not provide for a mixture
              of absentee and in-person votes in an assembly
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How will additional members of ABCs be elected in departments with
              fewer than four tenured faculty members?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 px-2 py-1">
              The standard definition of a quorum in Robert's Rules of Order is
              that the majority of an assembly must be present to conduct
              business. That is, if there are twenty members of a group, eleven
              must be present to constitute a quorum. The same requirement for a
              quorum applies to ABCs, with one additional provision. The
              Handbook (4.1.8.3) provides that absentee votes will be counted in
              ABCs, whereas Robert's Rules really do not provide for a mixture
              of absentee and in-person votes in an assembly
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can a faculty member on OCSA or FML serve on a ABC?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 px-2 py-1">
              The standard definition of a quorum in Robert's Rules of Order is
              that the majority of an assembly must be present to conduct
              business. That is, if there are twenty members of a group, eleven
              must be present to constitute a quorum. The same requirement for a
              quorum applies to ABCs, with one additional provision. The
              Handbook (4.1.8.3) provides that absentee votes will be counted in
              ABCs, whereas Robert's Rules really do not provide for a mixture
              of absentee and in-person votes in an assembly
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can an abstention vote be cast at a ABC meeting?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 px-2 py-1">
              The standard definition of a quorum in Robert's Rules of Order is
              that the majority of an assembly must be present to conduct
              business. That is, if there are twenty members of a group, eleven
              must be present to constitute a quorum. The same requirement for a
              quorum applies to ABCs, with one additional provision. The
              Handbook (4.1.8.3) provides that absentee votes will be counted in
              ABCs, whereas Robert's Rules really do not provide for a mixture
              of absentee and in-person votes in an assembly
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What constitutes a positive or negative vote in ABCs?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 px-2 py-1">
              The standard definition of a quorum in Robert's Rules of Order is
              that the majority of an assembly must be present to conduct
              business. That is, if there are twenty members of a group, eleven
              must be present to constitute a quorum. The same requirement for a
              quorum applies to ABCs, with one additional provision. The
              Handbook (4.1.8.3) provides that absentee votes will be counted in
              ABCs, whereas Robert's Rules really do not provide for a mixture
              of absentee and in-person votes in an assembly
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              What constitutes a quorum in a ABC?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 px-2 py-1">
              The standard definition of a quorum in Robert's Rules of Order is
              that the majority of an assembly must be present to conduct
              business. That is, if there are twenty members of a group, eleven
              must be present to constitute a quorum. The same requirement for a
              quorum applies to ABCs, with one additional provision. The
              Handbook (4.1.8.3) provides that absentee votes will be counted in
              ABCs, whereas Robert's Rules really do not provide for a mixture
              of absentee and in-person votes in an assembly
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
