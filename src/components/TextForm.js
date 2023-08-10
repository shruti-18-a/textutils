import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Textarea cleared!", "success");
    }

    const handleCopyClick = ()=>{
        let newText = document.getElementById("myBox");
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied !", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]*/);
        setText(newText.join(""));
        props.showAlert("Extra space removed!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className = "container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1 className = "mb-2">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#10476a":"white", color: props.mode==="dark"?"white":"#072641"}} value = {text}id="myBox"rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"#072641"}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=> {return element.length!==0}).length} Minutex read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
  );
}

