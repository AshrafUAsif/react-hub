import React from 'react';
import './Contents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Contents = (props) => {
  const { id, title, image, author, date, duration, content } = props.blog
  const handleBookmarkClick = props.handleBookmarkClick;
  const handleMarkAsReadClick = props.handleMarkAsReadClick;
      
  return (
    <div className='contents'>
      <img src={image} className='w-2/3 md:w-2/3 lg:w-2/3 mr-4 py-5' />
      <div className='flex flex-col md:flex-row'>
        <div className='w-12 h-12 mr-4'>
          <img className='w-full h-full object-cover rounded-full' src={author.avatar} alt="" />
        </div>
        <div className='flex flex-col'>
          <h4 className='text-base font-medium'>{author.name}</h4>
          <div className='text-sm text-gray-600'>{date}</div>
        </div>
        <div className='flex flex-col-1 md:flex-row mx-auto'>
          <div className='text-left text-xs text-gray-600 mt-1 md:mr-2 md:mt-0'>{duration} mins read</div>
          <div className='text-left'>
            <FontAwesomeIcon icon={faBookmark} onClick={() => handleBookmarkClick(props.blog)} className='bookmark-icon ml-2 bg-g hover:bg-danger-300' />
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-xl md:text-2xl lg:text-2xl font-bold py-5'>{title}</h2>
      </div>
      <div>
        <h4 className='text md:text-lg lg:text-lg w-10/12'>{content}</h4>
      </div>
      <div>
        <h4 className='text-md font-medium text-blue-600 py-3 rounded-md underline' onClick={() => handleMarkAsReadClick(duration)}>Mark as read</h4>
      </div>
    </div>
  );
};

export default Contents;
