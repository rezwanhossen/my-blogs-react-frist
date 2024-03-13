import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'

const Blogs = ({ handelAddBookmarks,counttime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))  
    },[])
    return (
        <div className=" w-2/3">
            <h1 className=" text-3xl font-bold">Blogs :{blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    handelAddBookmarks={handelAddBookmarks}
                    counttime={counttime}
                    blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handelAddBookmarks: propTypes.func,
    counttime: propTypes.func
}
export default Blogs;