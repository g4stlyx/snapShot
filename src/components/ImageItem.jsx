
function ImageItem({url,title}) {
  return (
    <div>
        <img className="imageListImg" src={url} alt={title} />
    </div>
  )
}

export default ImageItem