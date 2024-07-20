import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";


function App(){

    const [imageList,setImageList] = useState([]);

    const onHandleSubmit = async (term)=>{
        const images = await searchImages(term);
        setImageList(images);
    }

    return (
        <>
        <div>
            <SearchBar onHandleSubmit={onHandleSubmit} />
            <ImageList images={imageList} />
        </div>
        </>
    )
}

export default App;