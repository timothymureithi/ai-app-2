import React, { useState } from "react";

 

function Sidebar2() {
   /*File Upload and Drag*/
   const [file, setFile] = useState(null);

   const handleDrop = (e) => {
     e.preventDefault();
     const file = e.dataTransfer.files[0];
     setFile(file);
   };
 
   const handleFileSelect = (e) => {
     const file = e.target.files[0];
     setFile(file);
   };
 
   const handleDragOver = (e) => {
     e.preventDefault();
   };
 


  return (
    <div className="hg-sidebar hg-sidebar-2">
        <div className='nav-header'>
        <h2><img
    src=""
    alt="" className='left-mathiti-img'
  />Great Examples</h2></div>
    <div className="button-group">
      <button className="button-group__button">
        <img src="https://res.cloudinary.com/db15gy9h6/image/upload/v1679935634/arrow-right_1_clxfdf.png" alt="" className="button-group__icon" />
        <span className="button-group__text">Come up with the perfect user<br/> experiece for an app</span>
      </button>

      <button className="button-group__button">
        <img src="https://res.cloudinary.com/db15gy9h6/image/upload/v1679935634/arrow-right_1_clxfdf.png" alt="" className="button-group__icon" />
        <span className="button-group__text">Come up with the perfect user<br/> experiece for an app</span>
      </button>

      <button className="button-group__button">
        <img src="https://res.cloudinary.com/db15gy9h6/image/upload/v1679935634/arrow-right_1_clxfdf.png" alt="" className="button-group__icon" />
        <span className="button-group__text">Come up with the perfect user<br/> experiece for an app</span>
      </button>

      <button className="button-group__button">
        <img src="https://res.cloudinary.com/db15gy9h6/image/upload/v1679935634/arrow-right_1_clxfdf.png" alt="" className="button-group__icon" />
        <span className="button-group__text">Come up with the perfect user<br/> experiece for an app</span>
      </button>
    </div>

    <div>
      <br/>
    </div>
    <div className="file-upload-header">
    <h3>File Upload</h3>
</div>
    <div
      className="file-uploader"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <label htmlFor="file-input">
        {file ? (
          <div>
            <p>{file.name}</p>
            <button onClick={() => setFile(null)}>Clear</button>
          </div>
        ) : (
          <p>Click here to upload or drag a file</p>
        )}
      </label>
      <input
        id="file-input"
        type="file"
        accept=".jpg, .jpeg, .png, .gif, .pdf"
        onChange={handleFileSelect}
        hidden
      />
    </div>
     </div>
  );
}

export default Sidebar2;
