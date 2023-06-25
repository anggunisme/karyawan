import React, { useState } from "react";
import "../../css/Image.css";

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageReset = () => {
    setSelectedImage(null);
  };

  // ...

  return (
    <div className="image-selector-container">
      {selectedImage ? (
        <div className="image-preview-container">
          <img src={selectedImage} alt="Selected" className="image-preview" />
          <button onClick={handleImageReset} className="reset-button">
            Reset
          </button>
        </div>
      ) : (
        <div className="image-upload-container">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="image-upload"
          />
        </div>
      )}
    </div>
  );

  // ...
};

export default ImageSelector;
