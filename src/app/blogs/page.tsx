import Image from "next/image";
import Link from "next/link";
import blogs from "../../data/blog.json";
import { ChevronRight } from "lucide-react";
const Blog = () => {
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
                width={800}
                height={400}
                priority
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-t-lg"
              />
            </div>
            </Link>
            <div className="flex items-center text-md font-bold text-gray-700 mb-2 px-5">
              <Image src={blog.icon} alt="clock icon" width={16} height={16} />
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

export default Blog;
