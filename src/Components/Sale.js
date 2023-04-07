import { useState, useEffect } from "react";
import { data } from "./data";
import uniqid from "uniqid";

const Sale = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let imageArray = [];

    for (let i = 0; i < data.length; i++) {
      imageArray.push(data[i].imgURL);
    }
    setImages(imageArray);
  }, []);

  const slide = () => {
    let newImages = [...images];
    for (let i = 0; i < images.length; i++) {
      if ((i === images.length - 1)) {
        newImages[i] = images[0];
      } else {
        newImages[i] = newImages[i + 1];
      }
    }
    setImages(newImages);
  };

  setTimeout(slide, 5000);

  return (
    <div className="sale">
      <div className="slidesContainer">
        {images.map((image) => {
          return <img key={uniqid()} src={image} className="slide fade"></img>;
        })}
      </div>
    </div>
  );
};

export default Sale;
