import React from "react";
import "../ImageList/image-list.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  return (
    <div className="image-list">
      {props.imageLists.map((imageList) => (
        <ImageCard key={imageList.id}  images={imageList}/>
      ))}
    </div>
  );
};

export default ImageList;
