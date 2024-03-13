import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';
const Blog = ({ blog, handelAddBookmarks,counttime }) => {
    const { title,cover_img,author_img,author,post_date,reading_time,hashtags } = blog;
    return (
        <div className=' my-10 space-y-5'>
            <img src={cover_img} alt={`cover picture of the title ${title}`} />
            <div className=' flex justify-between items-center'>
                <div className=' flex gap-5 items-center'>
                    <img src={author_img} alt="" />
                    <div>
                        <h2 className="text-xl font-bold">{author}</h2>
                        <p>{ post_date}</p>
                    </div>

                </div>
                <div className=' flex gap-4'>
                    <p> {reading_time} min read </p>
                    <button onClick={()=>handelAddBookmarks(blog)}><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash }</a></span>)
                }
            </p>
            <p onClick={()=> counttime(reading_time)} className=" text-cyan-500 text-xl underline">mark as read</p>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handelAddBookmarks: PropTypes.func,
    counttime: PropTypes.func
    
}

export default Blog;