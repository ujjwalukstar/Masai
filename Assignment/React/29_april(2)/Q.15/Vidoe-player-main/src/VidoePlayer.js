import React, { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handlePause = () => {
    videoRef.current?.pause();
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play(); // Optional: auto-play after restart
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <video
        ref={videoRef}
        width="600"
        height="340"
        controls={false}
        style={{ border: '1px solid #ccc' }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div style={{ marginTop: '15px' }}>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause} style={{ margin: '0 10px' }}>Pause</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
