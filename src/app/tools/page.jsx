import Link from 'next/link';
import ToolDetailSection from './ToolDetail';
import TestimonialsSection from './Testimonial';
import FAQSection from './Faq';

const ToolMain = () => {
  return (
    <div className='w-full container mx-auto bg-gradient-to-b from-gray-800 to-black'>
      <article className='flex  flex-col items-start justify-center mx-5 sm:mx-10 relative'>
        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center text-white'>
          <Link href="/tools" passHref>
            <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl mb-4'>
              <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text relative overflow-hidden'>
                Elevate Your Game with Unique PUBG Names
                <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'></span>
              </span>
            </h1>
          </Link>
          <p className='text-lg sm:text-xl md:text-2xl leading-relaxed'>
          Start dominating in PUBG with a name as unique as your gameplay. Explore our robust name generator tools to find the perfect name that stands out on the battlefield. Whether you're looking for a random name or want to craft something special, we've got you covered.
          </p>
          <div className='mt-6 flex sm:flex-row flex-col gap-y-5'>
            <Link href="/tools/pubgnamegenerator" passHref>
              <button className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'>
                Generate Random Name
              </button>
            </Link>
            <Link href="/tools/pubgnamestyle" passHref>
              <button className='ml-4 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300'>
                Customize Your Name
              </button>
            </Link>
          </div>
        </div>
      </article>
      <ToolDetailSection/>
      <TestimonialsSection/>
      <FAQSection/>
    </div>
  );
}

export default ToolMain;
