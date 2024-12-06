import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import songs from "./songs";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

function AudioPlayer({ currentSong, isPlaying, setIsPlaying, audioRef }) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setCurrentTime(currentTime);
    setDuration(duration);
    setProgress((currentTime / duration) * 100);
  };

  useEffect(() => {
    if (audioRef.current) {
      const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
      };
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () =>
        audioRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
    }
  }, [audioRef]);

  return (
    <div className="audio-player">
      <img
        src={currentSong.thumbnail}
        alt={`${currentSong.title} thumbnail`}
        className="current-song-thumbnail"
        style={{ width: "64px", height: "64px" }}
      />
       <div className="sp">
        <div className="topE">
        <button onClick={handlePlayPause} className="play-button">
        {isPlaying ? "Pause" : "Play"}
      </button>
      <span className="playSignTitle">{currentSong.title}</span>
      </div>
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={updateProgress}
        onEnded={() => setIsPlaying(false)}
      ></audio>
      <div className="progress-container">
        <input
          type="range"
          value={progress}
          onChange={handleProgressChange}
          className="progress-bar"
        />
        <span className="timer">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
      </div>
    </div>
  );
}

function SongList({ songs, onSongSelect }) {
  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <div
          key={index}
          className="song-item"
          onClick={() => onSongSelect(song)}
        >
          <img
            src={song.thumbnail}
            alt={`${song.title} thumbnail`}
            className="song-thumbnail"
          />
          <div>
          <div className="promo">{song.promo}</div>
          <p className="song-title">{song.title}</p>
          </div>
          <button>buy</button>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true); // Automatically start playing the selected song
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 0); // Ensure the audio element is updated before playing
  };




  // Herder logo
function Headerlogo() {
  return (
    <a href="/" className="Headerlogo">
      <img src="./beathub1.jpg" style={{ width: "64px", height: "64px" }} ></img>
    </a>
  );
}
//Header search bar
function HeaderSearchBar() {
  return (
    <input type="text" className="HeaderSearchBar" value=" 🔎 search for your song"></input>
  );
}

//Header cart Icon
function HeaderCartIcon() {
  return (
    <div className="HeaderCartIcon">
      <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart Icon" className="HeaderCartIcon" />
    </div>
  );
}

function GroupA() {
  return (
    <div className="GroupA"><Headerlogo /> <HeaderSearchBar /> <HeaderCartIcon />  </div>
  );
}

function GroupB() {
  return (
    <div className="GroupB">

      BeatHub is a brand that supports afrobeat artist
      <h1 style={{ color: "Tomato" }}>BeatHub is a brand that supports afrobeat artist</h1>
      <h5 style={{ fontSize: "0.6em", padding: "0 0px"}}>BeatHub is a brand that supports afrobeat artist BeatHub is a brand that supports afrobeat artist BeatHub is a brand that supports afrobeat artist</h5>
     </div>
  );
}


function GroupCa() {
  return (
    <div className="GroupCa">  
    
    
    <div className="footer-wrapper">
      <div className="footer-container">
        <img src="./beathub1.jpg"  alt="logo" />
        <p>
          Discover the beats that set the tone for your <br />
          next hit. For custom beats and exclusive rights, <br />
          get in touch with us.
        </p>
        <a href="contact.html">Contact Us</a>
        <p>info@urbeathub.com</p>
      </div>

      <div className="footer-container1">
        <p>
          <a href="link">License</a>
        </p>
        <p>
          <a href="link">Start Selling</a>
        </p>
        <p>
          <a href="link">Privacy Policy</a>
        </p>
      </div>

      <div className="accordion-container">
        <fieldset>
          <legend>FAQ</legend>
        </fieldset>
        <button className="accordion">What Happens When My License Expires?</button>
        <div className="content">
          <p>We are here</p>
        </div>

        <button className="accordion">How Do I Renew My License?</button>
        <div className="content">
          <p>We are here</p>
        </div>

        <button className="accordion">How Do I Buy Exclusive Rights?</button>
        <div className="content">
          <p>We are here</p>
        </div>
      </div>

     
    </div>
    
    
    
    
    </div>
  );
}

function GroupCb() {
  return (
    <footer className="GroupCb">  
    <p>BeatHub is a Brand That Support African Musicians</p>
    <p>COPYRIGHT BEATHUB 2024</p>
</footer> 
  );
}

function GroupC() {
  return (
    <div className="GroupC">



    </div>
    
  );
}



function GroupF() {
  return (
    <div className="GroupF">
      <section className="newsletter">
        <div className="newsletter1">
          <h4>Stay up-to-date with our newsletter</h4>
          <p>Join now and get 15% off your next purchase</p>
          {/* Input for email */}
          <input
            type="email"
            className="submit-button"
            placeholder="Enter your email..."
          />
          {/* Submit button */}
          <p>
            <input
              type="submit"
              className="buy-link"
              value="Subscribe now!"
            />
          </p>
        </div>

        <div className="credibility">
          <h4>Credibility</h4>
        </div>
      </section>
    </div>
  );
}








  
  return (
    <div className="App">


      <header className="App-header">
      <GroupA />
      <GroupB />
      <div className="beat">
        <AudioPlayer
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
        <SongList songs={songs} onSongSelect={handleSongSelect} />
        </div>
        </header>
      <GroupF />
      <GroupCa />
      <GroupCb />
    </div>
  );
}

export default App;

















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">


        
//         <GroupB />
//         <GroupBa />
//         <GroupF />
//         <GroupCa />
//         <GroupCb />
       
       
        
     
//       </header>
//     </div>
//   );
// }

// export default App;

