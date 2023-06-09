import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    const handleCopyText = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to Clipboard", "success")
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');


  return (
    <>
    <div className="container" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === "dark" ? "#b9b6b6" : "white", color: props.mode === "light" ? "black" : "white"}} onChange={handleChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copt Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read.</p>

      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter Something above in textbox to preview."}</p>
    </div>
    </>
  )
}
