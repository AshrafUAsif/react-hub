import React from 'react';

const Marked = ({ marked }) => {
    return (
        <div className='sticky top-0'>
            <h4 className='text-lg font-medium text-purple-700 py-2 px-4 rounded-md border border-purple-700 bg-purple-100'>Spent time on read:</h4>

            <br />
            <div>
            <h4 className='text-xl font-medium text-center pb-3 pt-3' style={{ background: 'rgba(17, 17, 17, 0.05)', borderRadius: '8px' }}>Bookmarked Blogs: {marked.length}</h4>
            {marked.map(blog => (
                <div key={blog.id} style={{ background: 'rgba(17, 17, 17, 0.05)', borderRadius: '8px' }} className='text-md font-semibold py-3 px-4 rounded-md'>{blog.title}</div>
            ))}
            </div>
            
        </div>
    );
};

export default Marked;
