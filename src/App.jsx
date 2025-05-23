import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleAddBookmarks = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }

    const handleReadingTime = (id, time) => {
        setReadingTime(readingTime + time);

        // Remove Bookmark 
        const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
        setBookmarks(remaining);
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <main className='md:flex gap-8 mt-4'>
                <Blogs handleAddBookmarks={handleAddBookmarks}
                    handleReadingTime={handleReadingTime}></Blogs>

                <Bookmarks bookmarks={bookmarks}
                    readingTime={readingTime}></Bookmarks>
            </main>
        </div>
    )
}

export default App
