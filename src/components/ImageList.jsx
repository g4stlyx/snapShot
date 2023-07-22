import ImageItem from "./ImageItem"

function ImageList({images}) {
  return (
    <div className="imageList">
        {
            images.map((image)=>{

                let farm = image.farm;
                let server = image.server;
                let id = image.id;
                let secret = image.secret;
                let title = image.title;
                let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`

                return <ImageItem key={id} url={url} alt={title}/>
            })
        }
    </div>
  )
}

export default ImageList