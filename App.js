import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState("Hello");
  const [author, setAuthor] = useState("World");
  // http://localhost:3000

  useEffect(() => {
      fetch("http://localhost:3000")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )

  },[]);

  let fetchNewQuote = () => {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )

  }
  return (
    <div className="App">
         <div className="quotes">
          <h2>{quote}</h2>
          <small>-Author-</small>
    </div><br />
    <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
    </div>
  );
}

export default App;
