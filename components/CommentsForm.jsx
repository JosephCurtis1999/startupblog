import React, { useRef, useState, useEffect } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    // below line might need to be checked if comments aren't correctly posting to the comments section
    const { value: name } = nameEl.name; 
    const { value: email } = emailEl.current

    if(!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name, email, comment, slug
    };


  }




  return (
    <div className='bg-black bg-opacity-30 text-white rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Comments Form</h3>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <textarea 
          ref={commentEl} 
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-white text-gray-700"
          placeholder="Comment"
          name="comment"

          />

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
          <input type="text" ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-white text-gray-700"
          placeholder="Name"
          name="name"

          />
          <input type="text" ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-white text-gray-700"
          placeholder="Email"
          name="email"

          />

        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <div>
            <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" />
            <label className='text-white cursor-pointer ml-2' htmlFor='storeData'>Save my e-mail and name for the next time I comment</label>
          </div>
        </div>
        {error && <p className='text-xs text-red-500'>All fields are required</p>}
        <div className='mt-8'>
          <button 
          type='button' 
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-black hover:text-white inline-block bg-white text-lg rounded-full text-black px-8 py-3 cursor-pointer"
          >Post Comment
          </button>
          {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
        </div>
    </div>
  )
}

export default CommentsForm