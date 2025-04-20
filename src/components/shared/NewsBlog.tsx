import Link from 'next/link';
import blogs from '../../data/blog.json';
import Image from 'next/image';

const NewsBlog = () => {
  return (
    <div>
        <h2 className='md:text-4xl text-2xl font-bold text-lightGreen font-secondary md:pb-8 pb-4'>Our News & Blogs</h2>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8'>
            <h3 className='md:text-2xl text-xl font-semibold text-lightBlack font-secondary md:pb-8 pb-4'>Stories From Our Health Card Users</h3>
            <Link href='/blogs' className='flex items-center gap-2'>
                <button className='border border-lightGreen text-white cursor-pointer hover:bg-darkGreen bg-lightGreen px-4 py-2 rounded-sm font-semibold'>View All</button>
            </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 py-8 md:py-16'>
            {blogs.slice(0, 3).map((item) => (
                <div key={item.id} className='bg-white hover:scale-105 duration-300 rounded-lg shadow-md p-4 flex flex-col gap-4'>
                    <Image src={item.image} alt={item.title} width={500} height={500} className='w-full h-full object-cover rounded-lg'/>
                    <h3 className='text-lg text-lightGreen font-bold'>{item.title}</h3>
                    <p className='text-sm text-lightBlack font-semibold'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewsBlog;