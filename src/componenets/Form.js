import React, { useState } from "react";

export default function Form(props) {
  const uphandleOnClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("converted to uppercase", "success");

  };
  const lohandleOnClick = () => {
    let upText = text.toLowerCase();
    setText(upText);
    props.showAlert("converted to lowercase", "success");

  };
  const clearhandleOnClick = () => {
     let upText = '';
      setText(upText);
      props.showAlert("text has been cleared", "success");

  };
  const copyhandleOnClick = () => {
     var text = document.getElementById('mybox');
     text.select();
     text.setSelectionRange(0, 9999);
     navigator.clipboard.writeText(text.value);
     props.showAlert("text has been copied to clipboard", "success");

 };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
//   const boldhandleOnClick = () => {
//     let upText = text.style.fontSize = "100px"
//     setText(upText);
// };
const [text, setText] = useState("enter here");
//  const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
//   });
//  const [btnText, setBtnText] = useState("dark-mode");
//  const darkMode = () => {
//   if(myStyle.color === 'black'){
//     setMyStyle({
//       color: 'white',
//       backgroundColor: 'black'
//     })
//     setBtnText("light-mode")
//   }else{
//     setMyStyle({
//       color: 'black',
//       backgroundColor: 'white'
//     }) 
//     setBtnText("dark-mode")
//   }
// }
  return (
    <>
      <div className= "container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Enter the text to analyze</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            rows="10"
            style={{backgroundColor: props.mode==='dark'?'#3d3b48' : 'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={uphandleOnClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={lohandleOnClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={clearhandleOnClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-3" onClick={copyhandleOnClick}>
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>text summury</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes required to read</p>
        <h2>summary</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
