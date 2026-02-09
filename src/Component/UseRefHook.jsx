import React, { useState, useRef, useEffect } from "react";

export default function UseRefHook() {
  //eg 1
  const inputRef = useRef();
  const focusinput = () => {
    inputRef.current.focus();
  };

  //eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  //eg3
  const [newProduct, setNewProduct] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const imgref = useRef(0);

  const handleClick = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProduct(false);
    }
  };

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" ref={inputRef} placeholder="Type here..." />
        <button onClick={focusinput}>Focus input</button>
      </nav>
      {/* eg2 */}
      <nav>
        <p>Timer:{sec}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      </nav>
      {/* eg3 */}

      <nav>
        <input
          ref={imgref}
          type="file"
          accept="image/*"
          onClick={handleClick}
          hidden
        />
        {newProduct ? (
          <div className="image-box" onClick={() => imgref.current.click()}>
            Upload image
          </div>
        ) : (
          <img className="image-img" onClick={() => imgref.current.click()} src={imageURL} alt="" />
        )}
      </nav>
    </div>
  );
}