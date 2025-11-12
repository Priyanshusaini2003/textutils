import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case!","success");
    }

    const handleClrClick = () =>{
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared!","success");
  }

    const handleCapClick = () => {
        let newText = text.split(' ').map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        setText(newText);
        props.showAlert("Converted to Capitalized case!","success");
    }

    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied!","success");
  }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCapClick}>Convert to Capital case</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClrClick}>Clear text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy text</button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>
    </div>
    </>
  );
}
