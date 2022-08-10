import React, { useEffect, useState } from "react";

export default function Quote() {
  /////////////////////////////////////////

  // States
  const [quote, setQuote] = useState(
    "Life isn’t about getting and having, it’s about giving and being."
  );
  const [author, setAuthor] = useState("Kevin Kruse");
  //////////////////////////////////////////////////

  // useeffect and fetch
  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNumber = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNumber];
        console.log(randomQuote);

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  //   random number

  //   const quoteArr = quote;
  //   const randomNumber = Math.floor(Math.random() * quoteArr);
  //   const quoteAchieve = quoteArr[randomNumber].quote;
  //   console.log(quoteAchieve);

  ////////////////////////////////////////

  //   handleChange

  function handleChange() {
    getQuote();
  }

  ////////////////////////////////////////////
  return (
    <div className="quote-box">
      <p>{quote}</p>

      <div className="author">{author}</div>

      <div className="buttons">
        <div className="social-media">
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-facebook"></a>
        </div>
        <button id="new-quote" onClick={handleChange}>
          New Quote
        </button>
      </div>
    </div>
  );
}
