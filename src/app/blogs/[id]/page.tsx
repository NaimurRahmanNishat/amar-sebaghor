"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import blogs from "../../../data/blog.json";
import Link from "next/link";

const Singlepage = () => {
  const params = useParams();
  const id = params.id;

  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return <p className="pt-20 px-4">Blog not found</p>;
  }

  return (
    <main className="pt-12 pb-12 md:pb-0 md:pt-28 flex flex-col md:flex-row gap-4 md:gap-8">
      {/* left side content start */}
      <div className="w-full md:w-[75%]">
        <div className="w-full h-[300px] md:h-[500px] relative rounded-lg mb-6 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title} 
            priority
            fill
            className="object-cover"
          />
        </div>
        <div className="mb-6 text-gray-600 flex items-center gap-2">
          <Image src={blog.icon} alt="icon" width={16} height={16} />
          <span>{blog.time}</span>
        </div>
        <h1 className="text-3xl font-bold text-lightGreen mb-4">
          {blog.title}
        </h1>
        <p className="text-gray-800 leading-relaxed text-md">
          {blog.description}
        </p>
      </div>
      {/* left side content end */}

      {/* right side content start */}
      <div className="w-full md:w-[25%] md:h-[685px] bg-gray-100 px-3 py-6">
        <h2 className="font-bold text-lg text-lightGreen">Latest Blogs</h2>
        <ul className="mt-4 space-y-2">
          {blogs.slice(0, 5).map((blog) => (
            <li key={blog.id} className="flex border-b py-2">
              <div className="w-[200px] h-[100px]">
              <Image src={blog.image} alt="icon" width={96} height={64} />
              </div>
              <Link
                href={`/blogs/${blog.id}`}
                className="text-md text-start text-wrap font-semibold text-lightGreen hover:text-simpleGreen"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* right side content end */}
    </main>
  );
};

export default Singlepage;
