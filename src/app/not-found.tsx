import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full py-20 sm:py-40 md:my-[200px] text-center'>
      <h2 className='text-3xl md:text-[40px] font-bold font-montserrat'>
        The Page Try To Access Not Found
      </h2>
      <p className='text-2xl md:text-3xl'>Please Try Other Pages</p>
      <Link
        href='/'
        className=' px-4 md:px-6 py-1.5 md:py-3 border shadow-xl rounded-3xl hover:bg-primary-light/40 transition-colors'
      >
        Return Home
      </Link>
    </div>
  );
}
