import React, { useState, useEffect } from "react";
import Emoji from "./components/Emoji";

const API_KEY = "&access_key=941bb6acd9fa69d49674efc125b786198a26c965";
const EMOJI_API =
  "https://emoji-api.com/emojis?access_key=941bb6acd9fa69d49674efc125b786198a26c965";
const SEARCH_API = "https://emoji-api.com/emojis?search=";

function App() {
  const [emojis, setEmojis] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getEmojis(EMOJI_API);
  }, []);

  const getEmojis = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmojis(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getEmojis(SEARCH_API + searchTerm + API_KEY);
      setSearchTerm("");
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <h2>EmojiAPP</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </header>
      <div className="app">
        {emojis.length > 0 &&
          emojis.map((emoji) => <Emoji key={emoji} {...emoji} />)}
      </div>
    </>
  );
}

export default App;
