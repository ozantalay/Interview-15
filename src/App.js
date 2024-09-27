import React, { useState, useEffect } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  // KODUNUZ BURAYA GELECEK
  const[inputText,setInputText]=useState('')
  const[displayText,setDisplayText]=useState('')
  const [wordIndex,setWordIndex]=useState(0)
  const[wordArray, setWordArray]=useState([])

  const handleInputChange=(e)=>{
    setInputText(e.target.value)
    setWordIndex(0)
    setDisplayText('')
    setWordArray(e.target.value.split(' '))

  }
  useEffect(()=>{
    if(wordIndex<wordArray.length){
     const interval=setInterval(() => {
        
       setDisplayText((prev)=>prev+" "+wordArray[wordIndex])
       setWordIndex((prev)=>prev+1)
      }, 500);
      return()=>clearInterval(interval)
    }
  } ,[wordIndex,wordArray])

    return (
      <div className="text-center">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Metin giriniz"
          className="border-[1px] border-black pl-1"
        />
        <div>{displayText}</div>
      </div>
    );
};

export default App;
