import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
 const [bookMarks, setBookMarks] = useState([])
 const[spentTime, setSpentTime]= useState(0)

 const sumOfST= time =>{
        setSpentTime(spentTime + time);
 }
  const handleAddToBookmark =(blog)=>{
        const newBookmarks = [...bookMarks, blog];
        setBookMarks(newBookmarks);
  }

  return (
    <>
      
      <header className='md:max-w-[65%] mx-auto py-8'>
      <Header></Header>
      </header>
      <main className='flex md:max-w-[65%] mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} sumOfST={sumOfST}></Blogs>
      <Bookmarks bookMarks={bookMarks} spentTime={spentTime}></Bookmarks>
      </main>
      
      
    </>
  )
}

export default App
