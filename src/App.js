import React, { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let player;
    window.onYouTubeIframeAPIReady = function () {
      player = new window.YT.Player('background-video', {
        playerVars: {
          listType: 'playlist',
          list: 'PLovE6_wEJTkR6ew13zCQOMu_l37BrHqn7',
          autoplay: 1,
          controls: 0,
          mute: 1,
          modestbranding: 1,
          loop: 1,
          showinfo: 0,
          iv_load_policy: 3,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
            setTimeout(() => {
              event.target.setVolume(20); 
              event.target.unMute();
            }, 1000);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              player.nextVideo();
            }
          },
        },
      });
    };
  }, []);

  return (
    <div className="App">
      <div id="background-video-container">
        <div id="background-video"></div>
      </div>
      <Header />
      <Navbar />
      <div className="content">
        <About />
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
