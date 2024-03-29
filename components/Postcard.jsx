import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const Postcard = ({ post }) => {
  console.log(post);
  return (
    <div className='bg-black bg-opacity-30 text-white rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img 
        src={post.featuredImage.url}
        alt={post.title}
        className= "object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg imgbw" />
      </div>
      <h1 className='transition duration-500 text-center mb-8 cursor:pointer title-hover text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>
        {post.title}
        </Link>
      </h1>
      <div className='bloc lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img alt={post.author.name} height="30px" width="30px" className='align-middle rounded-full' src={post.author.photo.url} />
          <p className='inline align-middle text-black-600 ml-2 text-lg'></p>
        </div>
        <div className='font-medium text-black-600'>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center text-lg text-black-600 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 bg-white bg-opacity-30 continue inline-block text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Postcard