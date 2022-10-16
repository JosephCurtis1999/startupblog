import React from 'react'
import moment from 'moment';
import Link from 'next/Link';

const Postcard = ({ post }) => {
  console.log(post);
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 ;g:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img 
        src={post.featuredImage.url}
        alt={post.title}
        className= "object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
    </div>
  )
}

export default Postcard