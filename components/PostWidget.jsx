import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts ] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
      .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }

  }, [input])

  return (
    <div>PostWidget</div>
  )
}

export default PostWidget