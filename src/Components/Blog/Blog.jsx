import React, { useEffect, useState } from 'react';
import Contents from '../Contents/Contents';
// import data from '../../Components/fakeData/fake.json';


const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect( () =>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className='blog flex flex-wrap justify-between max-w-screen-xl mx-auto border-t border-gray-300 p-4'>
      <div className='w-full md:w-3/4 pr-4'>
        {
          blogs.map(blog => <Contents key={blog.id} blog ={blog}>

          </Contents>)
        }
      </div>
      
      <div className='w-full md:w-1/4'>
        <h4 className='text-lg font-medium text-purple-700'>Spent time on Read:</h4>
        <br />
        <h4 className='text-lg font-medium' style={{ background: 'rgba(17, 17, 17, 0.05)', borderRadius: '8px' }}>Bookmarked Blogs:</h4>
      </div>
    </div>
  );
};

export default Blog;
