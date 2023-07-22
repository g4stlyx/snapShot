import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchImages from "./components/SearchImages"
import ImageList from './components/ImageList'

function App() {

  const [images,setImages] = useState([])
  const handleSearch = async (term)=>{
    const result = await SearchImages(term)
    setImages(result)
  }


  return (
    <div>
        <Header search={handleSearch} />
        <ImageList images={images}/>
    </div>
  )
}

export default App
