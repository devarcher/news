import React from 'react'
import "./App.css";

const App = () => {

// Hacker News: Relevant URIs.
const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesUrl = `${baseUrl}newstories.json`;
const storyUrl = `${baseUrl}items/`


const getStoryIds = async () => {
  const response = await fetch(newStoriesUrl); 
  const data = await response.json()
  return data
}

  return (
    <div className="App">
      <p></p>
    </div>
  );
}

export default App;
