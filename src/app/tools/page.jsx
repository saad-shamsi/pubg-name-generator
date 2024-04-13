import { allBlogs } from '@/.contentlayer/generated'
import RecentPosts from '@/src/components/Home/RecentPosts'
import Tool from '@/src/components/Tools/main'
import NameGenerator from '@/src/components/Tools/NameGenerator'
import React from 'react'

const Tools = () => {
  return (
    <>
    <main className=''>
     <h1 className='text-center text-4xl font-bold text-white'>Tools</h1>
     <p>
      <NameGenerator/>
      <Tool/>
     </p>
      </main>
    <RecentPosts blogs={allBlogs}/>
    </>
  )
}

export default Tools