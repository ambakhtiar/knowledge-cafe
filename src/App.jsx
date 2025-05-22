import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
    return (
        <>
            <Header></Header>
            <main className='w-10/12 mx-auto md:flex'>
                <Blogs></Blogs>
                <Bookmarks></Bookmarks>
            </main>
        </>
    )
}

export default App
