import axios from "axios";

const BASEURL = "http://localhost:3001/books";

const onAPICreateBook = async(title)=>{
   const response = await axios.post(BASEURL,{title})
   return response.data;
}

const onAPIGetBooks = async()=>{
    const response = await axios.get(BASEURL);
    return response.data;
}

const onAPIUpdateBook = async(id,title)=>{
    const response = await axios.put(`${BASEURL}/${id}`,{title});
    return response.data;
}

const onAPIDeleteBook = async(id)=>{
    const response = await axios.delete(`${BASEURL}/${id}`);
    return response.data;
}


export {onAPICreateBook,onAPIGetBooks,onAPIUpdateBook,onAPIDeleteBook};