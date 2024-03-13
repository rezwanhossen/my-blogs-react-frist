
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setbookmarks] = useState([]);
  const [redtime, setredtime] = useState(0);

  const handelAddBookmarks = blog => {
    const newbookmark = [...bookmarks, blog];
    setbookmarks(newbookmark);
  }
  const counttime = time => {
    setredtime(redtime + time);
  }
  

  return (
    <>
      
      <Header></Header>
      <div className=' md:flex max-w-6xl mx-auto'>
        <Blogs
          handelAddBookmarks={handelAddBookmarks}
          counttime={counttime}
        ></Blogs>
        <Bookmark bookmarks={bookmarks}
        redtime={redtime}></Bookmark>
      </div>
     
      
    </>
  )
}

export default App;
