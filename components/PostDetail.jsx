import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='bg-black bg-opacity-30 rounded-lg lg:p-8 pb-12 mb-8 imgbw text-white'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img 
        src={post.featuredImage.url}
        alt={post.title}
        className="object-top h-full w-full rounded-t-lg"
        
          
          />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
        <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img alt={post.author.name} height="30px" width="30px" className='align-middle rounded-full' src={post.author.photo.url} />
          <p className='inline align-middle text-black-600 ml-2 text-lg'></p>
        </div>
        <div className='font-medium text-black-600'>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>

        </div>
        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

          return getContentFragment(index, children, typeObj, typeObj.type)
        
        })}
      </div>   
    </div>
  )
}

export default PostDetail