import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <header className='md:max-w-[65%] mx-auto py-8'>
      <Header></Header>
      </header>
      <main className='flex md:max-w-[65%] mx-auto'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
      
      
    </>
  )
}

export default App
