import React from "react";
import video from "../data/video.js";
import Votes from "./Votes.js";
import Comments from "./Comments.js";

function App() {
  // console.log("Here's your data:", video);
  
  return (
    <div 
    style={{
      display: 'grid',
    }}
    >
      <div className="App">
        <iframe
          width="919"
          height="525"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </div>
      <h1>{video.title}</h1>
      <p>{video.views} | Uploaded {video.createdAt}</p>
      <Votes video={video} />
      <Comments video={video} />
    </div>
  );
}

export default App;
