import React, { useEffect, useState } from 'react';
import Contents from '../Contents/Contents';
import Marked from '../../Marked/Marked';
// import data from '../../Components/fakeData/fake.json';


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [marked, setMarked] = useState([]);
  const [totalSpentTime, setTotalSpentTime] = useState(0);

  useEffect( () =>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

  const handleBookmarkClick = (blog) =>{
    // marked.push(blog);
    const newMarked = [...marked, blog];
    setMarked(newMarked);
}
const handleMarkAsReadClick = (duration) => {
  setTotalSpentTime(totalSpentTime + duration);
}

  return (
    <div className='blog-container blog flex flex-wrap justify-between max-w-screen-xl mx-auto border-t border-gray-300 p-4'>
      <div>
      <p className='text-lg md:text-lg lg:text-lg font-small'>I have answered the four questions inside the four elements for making the assignment more cleaner</p>
      </div>
      <div className='content-container w-full md:w-3/4 pr-4'>
        {
          blogs.map(blog => <Contents key={blog.id} blog ={blog} handleBookmarkClick={handleBookmarkClick} handleMarkAsReadClick={handleMarkAsReadClick}>

          </Contents>)
        }
      </div>
      
      <div className='bookmark-container w-full md:w-1/4 py-5'>
        <Marked marked={marked} totalSpentTime={totalSpentTime}></Marked>    
      </div>
    </div>
  );
};

export default Blog;
