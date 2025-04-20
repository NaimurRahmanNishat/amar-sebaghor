"use client";
import CountUp from 'react-countup';

const stats = [
  {
    num: 11,
    suffix: "+",
    text: "Years of Health Coaching Experience",
  },
  {
    num: 700,
    suffix: "M+",
    text: "Happy Customers with References",
  },
  {
    num: 90,
    suffix: "+",
    text: "Contests and Conferences attended",
  },
  {
    num: 110,
    suffix: "M+",
    text: "Days of a new Superfast Program",
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <h2 className="md:text-3xl text-xl font-bold text-lightGreen font-secondary md:pb-8 pb-4">
        Clients are diverse but all are actively engaged in life
      </h2>
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-center pb-9 md:pb-20">
        {stats.map((item, index) => (
          <div
            className=" flex gap-4 flex-col md:flex-row items-center justify-center xl:justify-start text-lightBlack"
            key={index}
          >
            <span className="text-2xl xl:text-4xl font-extrabold ">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                suffix={item.suffix}
              />
            </span>
            <p
              className={`${
                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } leading-snug text-white/80 text-sm md:text-base`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
