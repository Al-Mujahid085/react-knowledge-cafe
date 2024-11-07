import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {blog_name}= bookmark;
    return (
        <div className='bg-gray-200 p-4 mb-1 rounded-lg hover:bg-sky-500'>
            <p className='text-xl p-2 bg-white rounded-lg'>{blog_name}</p>
            
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
}
export default Bookmark;