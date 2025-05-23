import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 space-y-8 mt-8">
            <div className="bg-gray-400 rounded-xl">
                <h2 className="text-3xl font-bold pl-4 py-4">Spent Time on Read: {readingTime}</h2>
            </div>
            <div className='bg-gray-400 h-full rounded-xl pb-4'>
                <h2 className="text-3xl font-bold pl-4 py-4 ">Booksmarks Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;