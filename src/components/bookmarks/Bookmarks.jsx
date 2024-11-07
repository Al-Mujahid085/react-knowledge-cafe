import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookMarks, spentTime}) => {
   
    return (
        <div className="w-1/3 border-2 ">

            <div>
            <h1 className="px-2 text-xl font-bold border-b-4 border-sky-200 rounded-full text-center bg-sky-200 mb-3">Bookmarked Blog:{bookMarks.length}</h1>
            <p>Spent time on read : {spentTime}</p>
            </div>
            <div>
                {
                    bookMarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
                }
            </div>
            
        </div>
    );
};
Bookmarks.propTypes={
    bookMarks: PropTypes.array,
    spentTime: PropTypes.number.isRequired
}
export default Bookmarks;