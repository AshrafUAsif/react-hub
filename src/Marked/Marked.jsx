import React from 'react';

const Marked = ({marked}) => {
    // const {marked} = props;
    return (
        <div className='sticky top-0'>
            <h4 className='text-lg font-medium text-purple-700 py-2 px-4 rounded-md border border-purple-700 bg-purple-100'>Spent time on read:</h4>

            <br />
            <h4 className='text-lg font-medium' style={{ background: 'rgba(17, 17, 17, 0.05)', borderRadius: '8px' }}>Bookmarked Blogs: {marked.length}</h4>
        </div>
    );
};

export default Marked;