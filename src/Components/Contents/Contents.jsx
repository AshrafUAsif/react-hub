import React from 'react';
import './Contents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Contents = (props) => {
    const { id, title, name, image, author, avatar, date, duration, content } = props.blog

    const handleBookmarkClick = () =>{

    }

    return (
        <div className='contents'>
            <img src={image} className='w-2/3 md:w-2/3 lg:w-2/3 mr-4 py-5' />
            <div className='flex flex-col-1'>
                <div className='w-12 h-12 mr-4'>
                    <img className='w-full h-full object-cover rounded-full' src={author.avatar} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-base font-medium'>{author.name}</h4>
                    <div className='text-sm text-gray-600'>{date}</div>
                </div>
                <div className='flex flex-col-1 mx-auto'>
                <div className='text-xs text-gray-600 mt-1 mx-auto'>{duration} mins read</div>
                <div>
                <FontAwesomeIcon icon={faBookmark} onClick={handleBookmarkClick} className='bookmark-icon ml-2 bg-g' />
                </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Contents;