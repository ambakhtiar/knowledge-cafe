import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddBookmarks, handleReadingTime }) => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data));
    }, [])
    return (
        <div className="w-2/3">
            <h2 className="text-3xl font-bold mb-4">Blogs: {blogs.length} </h2>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddBookmarks={handleAddBookmarks}
                        handleReadingTime={handleReadingTime}>
                    </Blog>)
                }
            </div>
        </div>
    );
};

Blog.PropTypes = {
    handleAddBookmarks: PropTypes.func.isRequired
}
export default Blogs;