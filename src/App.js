import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😑": "Sara mood kharab kar diya",
  "🙅‍♂️": "Mujhe bol hi mat",
  "😏": "Accha?,Esa kya",
  "🙋‍♂️": "Aur bhai, kya hal chal?",
  "😌": "Bhahut acha laga jaankar",
  "🤦‍♂️": "Kya karun mai iska",
  "😒": "Chal be kal aana ",
  "🤷‍♂️": "Mujhe kya pata",
  "😓": "ahee, Sorry!",
  "🙏": "Ram-Ram"
};

var emojisWeKnow = Object.keys(emojiDictionary);

var emojiIKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "This Emoji is not in the dictionary.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <h2>Indian Version</h2>
      <img src="https://wallpapercave.com/wp/wp3801910.jpg" type="jpeg" />
      <input onChange={emojiHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis We know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
