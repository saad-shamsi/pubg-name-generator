import Link from 'next/link';

const ToolDetailSection = () => {
  return (
    <div className='w-full py-16 bg-black text-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12'>Explore Our PUBG Name Tools</h2>
        <div className='flex flex-wrap justify-center gap-10'>
          <div className='w-full sm:w-1/2 lg:w-1/3 bg-gradient-to-br from-green-600 to-blue-800 rounded-lg p-8 shadow-lg transition-transform hover:scale-105'>
            <h3 className='text-2xl font-bold mb-4'>Random Pubg Name Generator</h3>
            <p className='mb-6'>
              Instantly generate a random, unique PUBG name that captures attention and reflects your style on the battlefield. Perfect for players looking for a quick and effective solution.
            </p>
            <Link href="/tools/pubgnamegenerator" passHref>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Generate Now
              </button>
            </Link>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 bg-gradient-to-br from-purple-600 to-pink-800 rounded-lg p-8 shadow-lg transition-transform hover:scale-105'>
            <h3 className='text-2xl font-bold mb-4'>Pubg Name Styles</h3>
            <p className='mb-6'>
              Customize your PUBG name with various styles and languages. Tailor your name to reflect your personal brand or team ethos with our advanced customization tools.
            </p>
            <Link href="/tools/pubgnamestyle" passHref>
              <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                Customize Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolDetailSection;