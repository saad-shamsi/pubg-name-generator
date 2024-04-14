import Tool from '@/components/Tools/StlyleName'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Tool/>
        <div className="mt-8 text-center">
    <p className="text-lg text-gray-600">
        Looking for something different? Check out our {' '}   
         <Link href="/tools/pubgnamegenerator" passHref className="text-blue-500 hover:text-blue-700 font-semibold">
             Specialized PUBG Name Generator!
        </Link>
    </p>
</div>
    </div>
  )
}

export default page