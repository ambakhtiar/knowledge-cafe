import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data));
    }, [])
    return (
        <div>
            <h2>Blogs</h2>
        </div>
    );
};

export default Blogs;