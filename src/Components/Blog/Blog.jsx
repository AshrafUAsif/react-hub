import React, { useEffect, useState } from 'react';
import Contents from '../Contents/Contents';
// import data from '../../Components/fakeData/fake.json';


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [marked, setMarked] = useState([]);

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

  return (
    <div className='blog-container blog flex flex-wrap justify-between max-w-screen-xl mx-auto border-t border-gray-300 p-4'>
      <div className='content-container w-full md:w-3/4 pr-4'>
        {
          blogs.map(blog => <Contents key={blog.id} blog ={blog} handleBookmarkClick={handleBookmarkClick}>

          </Contents>)
        }
      </div>
      
      <div className='bookmark-container w-full md:w-1/4 py-5'>
      <h4 className='text-lg font-medium text-purple-700 py-2 px-4 rounded-md border border-purple-700 bg-purple-100'>Spent time on read:</h4>

        <br />
        <h4 className='text-lg font-medium' style={{ background: 'rgba(17, 17, 17, 0.05)', borderRadius: '8px' }}>Bookmarked Blogs: {marked.length}</h4>
      </div>
    </div>
  );
};

export default Blog;
