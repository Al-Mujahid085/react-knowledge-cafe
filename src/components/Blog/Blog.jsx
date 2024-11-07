import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";
const Blog = ({ blog , handleAddToBookmark , sumOfST}) => {



    const { cover_img, blogger_img, blogger_name, upload_time, hashtags, reading_time, blog_name } = blog
    return (
        <div className='mb-12 space-y-2'>
            <img src={cover_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex h-12'>
                    <img className='h-12 mr-4 rounded-lg border-2 border-sky-200' src={blogger_img} alt=" hello" />
                    <div className=''><h5 className='text-xl'>{blogger_name}</h5>
                        <p className='text-sm'>{upload_time}</p></div>
                </div>
                <div className='flex items-center gap-5'>
                    <p >{reading_time} min read.</p> <button onClick={()=>handleAddToBookmark(blog)} className='hover:bg-sky-200 hover:rounded-full p-2'><MdOutlineBookmarks ></MdOutlineBookmarks></button>
                </div>
            </div>
            <h3 className='text-3xl'>{blog_name}</h3>
            <p className='text-xs'>{hashtags}</p>
            <p onClick={()=>sumOfST(reading_time)} className='text-sm font-bold text-purple-700 hover:text-purple-400 underline'>Mark as read</p>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    sumOfST: PropTypes.func
}

export default Blog;