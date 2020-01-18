import React from 'react'
import "./App.css";

class App extends React.Component {

getStoryIds = async () => {
  // Hacker News: Relevant URIs.
  const query = 'trump'
  const baseUrl = `http://hn.algolia.com/api/v1/search?query=${query}`;
  const newStoriesUrl = `${baseUrl}newstories.json`;

  // Fetch Story Ids
  const response = await fetch(baseUrl); 
  const data = await response.json()
  console.log(data)
}

getStories = async (storyIds) => {
  // Hacker New: Relevant URIs.
  const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  const storyUrl = `${baseUrl}/item/`
 
  const response = await fetch(storyUrl); 
  const data = await response.json()
  console.log(data)
}




  render() {
    this.getStoryIds()
    return (
      <div className="App">
        <p></p>
      </div>
    );
  }

}
export default App;
