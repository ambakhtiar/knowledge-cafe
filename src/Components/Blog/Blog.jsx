import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({ blog, handleAddBookmarks, handleReadingTime }) => {
    // console.log(blog)
    const { id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4 '>
            <img className='w-full rounded-xl' src={cover} alt="" />
            <div className='flex justify-between gap-4'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmarks(blog)} className='text-lg font-bold text-blue-900 px-3 py-2 rounded-xl hover:bg-slate-400'><CiBookmarkPlus /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#">#{hash} </a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(id, reading_time)} className='underline text-blue-800 font-semibold'>Mark as Read</button>
        </div>
    );
};


Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired
}
export default Blog;