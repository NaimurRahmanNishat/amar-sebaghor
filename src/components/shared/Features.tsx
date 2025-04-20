import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import blogDataOne from "../../../public/blog/blogDataOne.png";
import blogDataTwo from "../../../public/blog/blogDataTwo.png";
import blogDataThree from "../../../public/blog/blogDataThree.png";
import blogDataFour from "../../../public/blog/blogDataFour.png";
import blogDataFive from "../../../public/blog/blogDataFive.png";
import blogDataSix from "../../../public/blog/blogDataSix.png";
import blogDataSeven from "../../../public/blog/blogDataSeven.png";
import blogDataEight from "../../../public/blog/blogDataEight.png";

interface Blog {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

const blogData: Blog[] = [
  {
    id: 1,
    image: blogDataOne,
    title: "11 Years of Experience.",
    description: "we are experiened last 11 years in patient on line/off line health service.",
  },
  {
    id: 2,
    image: blogDataTwo,
    title: "Smart Health Card Provide",
    description: "Smart health card for your family, storing information for all four members.",
  },
  {
    id: 3,
    image: blogDataThree,
    title: "Satisfaction Guarantee.",
    description: "We guarantee that you will definitely get the declared benefits of our health card.",
  },
  {
    id: 4,
    image: blogDataFour,
    title: "Best Health Card for You",
    description: "First to cover four family members under one health card, offering simultaneous outdoor and indoor services.",
  },
  {
    id: 5,
    image: blogDataFive,
    title: "Standards of health card support system.",
    description: "we give high priority to our listed hospital patients properly care.",
  },
  {
    id: 6,
    image: blogDataSix,
    title: "General Health Care Services.",
    description: "You will get all general health care through our health card.",
  },
  {
    id: 7,
    image: blogDataSeven,
    title: "Mother Health Care Service.",
    description: "Our listed hospitals have excellent quality of care for expectant mothers.",
  },
  {
    id: 8,
    image: blogDataEight,
    title: "24/7 Health care service.",
    description: "You can get healthcare 24 hours 7 days in our listed hospitals.",
  },
];

const Features = () => {
  return (
    <div>
      <h2 className="md:text-4xl text-2xl font-bold text-lightGreen font-secondary md:pb-8 pb-4">
        Our Features
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <h4 className="md:text-2xl text-xl font-semibold text-lightBlack font-secondary md:pb-8 pb-4">
          Amar Sebaghar : Our Health Card is here for your <br /> care and health.
        </h4>
        <div>
          <button className="border border-lightGreen text-white hover:bg-darkGreen bg-lightGreen px-4 py-2 rounded-sm font-semibold">
            <Link href="/register">Get Started</Link>
          </button>
        </div>
      </div>
      {/* blog data section start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 py-8 md:py-16 ">
        {blogData.map((item) => (
          <div
            key={item.id}
            className="bg-white hover:scale-105 duration-300 rounded-lg shadow-md p-4 flex flex-col gap-4"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={50}
              height={50}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-lightGreen font-secondary">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      {/* blog data section end */}
    </div>
  );
};

export default Features;
