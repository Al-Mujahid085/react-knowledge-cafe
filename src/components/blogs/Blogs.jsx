import { useEffect, useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, sumOfST}) => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        
        <div className="w-2/3 border-2 ">
            <h1 className="text-xl font-bold border-b-4 border-sky-200 rounded-full text-center bg-sky-200 mb-3"> Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} sumOfST={sumOfST} handleAddToBookmark={handleAddToBookmark}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleAddToBookmark: PropTypes.func,
    sumOfST: PropTypes.func
}
export default Blogs;