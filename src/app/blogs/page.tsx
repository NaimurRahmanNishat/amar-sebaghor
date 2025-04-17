import imageOne from "../../../public/blog/blogOne.jpg";
import imageTwo from "../../../public/blog/blogTwo.jpg";
import imageThree from "../../../public/blog/blogThree.jpg";
import imageFour from "../../../public/blog/blogFour.jpg";
import imageFive from "../../../public/blog/blogFive.png";
import imageSix from "../../../public/blog/blogSix.jpg";
import imageSeven from "../../../public/blog/blogSeven.jpg";
import imageEight from "../../../public/blog/blogEight.jpg";
import imageNine from "../../../public/blog/blogNine.png";
import { ChevronRight, Clock4 } from "lucide-react";
import { JSX } from "react/jsx-runtime";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Blog {
  id: number;
  image: StaticImageData;
  icon: JSX.Element;
  time: string;
  title: string;
  description: string;
}

const blogs: Blog[] = [
  {id: 1, image: imageOne, icon: <Clock4/>, time: "03 Sep 2024", title: "Nutritious Fruits for Better Health and Wellness", description: "If you want to eat fruits that promote health and wellness, here are some highly nutritious options. These fruits are rich in vitamins, minerals, antioxidants, and fiber, which help keep the body healthy and strengthen the immune system."},
  {id: 2, image: imageTwo, icon: <Clock4/>, time: "13 Sep 2023", title: "Mental and Physical Health Connection", description: "In today’s fast-paced world, the relationship between mental and physical health is more important than ever. While they are often treated as separate, mental and physical health are deeply interconnected, influencing each other in powerful ways. Recognizing this connection and adopting a holistic approach to well-being is key to achieving a balanced, healthy life."},
  {id: 3, image: imageThree, icon: <Clock4/>, time: "20 Dec 2023", title: "Exercise and Chronic Disease Prevention", description: "Chronic diseases, including heart disease, diabetes, and cancer, are leading causes of death and disability worldwide. While genetics, environmental factors, and lifestyle choices play significant roles in their development, one of the most effective ways to prevent and manage chronic diseases is through regular exercise. Whether you're aiming to enhance your well-being or reduce the risk of chronic conditions, integrating physical activity into your daily routine is a powerful strategy."},
  {id: 4, image: imageFour, icon: <Clock4/>, time: "16 Jan 2024", title: "Special Treatment", description: "Special treatment refers to the personalized care, attention, or service given to an individual based on their specific needs, preferences, or circumstances. This approach recognizes that everyone is different and that a one-size-fits-all solution is often inadequate."},
  {id: 5, image: imageFive, icon: <Clock4/>, time: "21 Feb 2024", title: "Take good care to your children", description: "Taking good care of your children is one of the most important responsibilities you will ever have. It involves more than just providing for their basic needs; it also includes nurturing their emotional, physical, and mental well-being. Here are some essential tips on how to take good care of your children and ensure they grow up healthy, happy, and well-adjusted."},
  {id: 6, image: imageSix, icon: <Clock4/>, time: "15 Apr 2024", title: "How Can You Formulate a Diet Depending on Your Goals", description: "A comprehensive guide to selecting the best health card for your family, including key features to consider and how to match coverage with your needs."},
  {id: 7, image: imageSeven, icon: <Clock4/>, time: "19 Jun 2024", title: "How to Cope With Feeling Unwell During Pregnancy", description: "Pregnancy can be an exciting time, but it can also come with various discomforts and health challenges. Feeling unwell during pregnancy is common and can be caused by a range of factors, from morning sickness to hormonal changes. Here’s a guide to help you manage and cope with these feelings effectively"},
  {id: 8, image: imageEight, icon: <Clock4/>, time: "19 Aug 2024", title: "Essential Foods for Maintaining a Healthy Body", description: "Maintaining a healthy body requires a balanced diet that provides all the necessary nutrients. Here’s a step-by-step guide to incorporating essential foods into your daily meals:"},
  {id: 9, image: imageNine, icon: <Clock4/>, time: "01 Sep 2024", title: "Maintaining Physical Health", description: "Physical health is a cornerstone of our daily lives. It enables us to perform daily tasks efficiently and protects us from various diseases. To stay physically healthy, regular exercise, a balanced diet, and adequate rest are crucial."},
]
const ShebaBlog = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg shadow rounded-t-lg">
            <Link href={`/blogs/${blog.id}`}>
            <div className="overflow-hidden h-72 mb-4 rounded-t-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-t-lg"
              />
            </div>
            </Link>
            <div className="flex items-center text-md font-bold text-gray-700 mb-2 px-5">
              {blog.icon}
              <span className="ml-1">{blog.time}</span>
            </div>
            <Link
              href={`/blogs/${blog.id}`}
              className="group relative block px-4 mb-2"
            >
              <h3 className="text-lg text-lightGreen font-bold inline-block relative">
                <span className="relative inline-block">
                  {blog.title}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-simpleGreen transition-all duration-500 group-hover:w-full"></span>
                </span>
              </h3>
            </Link>
            <p className="text-md text-gray-700 px-4">
              {blog.description.length > 100
                ? blog.description.slice(0, 100) + "..."
                : blog.description}
            </p>
            <Link
              href={`/blogs/${blog.id}`}
              className="group relative inline-block px-4 py-2 text-red-600 mb-4"
            >
              <div className="flex gap-0.5 hover:text-simpleGreen font-semibold">
                Read more <span className="pt-0.5"><ChevronRight /></span>
              </div>
              <span
                className="absolute left-4 bottom-3 h-[1px] w-0 bg-simpleGreen  rounded transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
              ></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShebaBlog;
