import axios from "axios"

const SearchImages = async (searchTerm) => {

    const key = "1546af6d9c4dcd786d2d9c44caee6d9a"
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
  
    const response = await axios.get(url)
    console.log(response.data.photos.photo)

    return response.data.photos.photo
}

export default SearchImages