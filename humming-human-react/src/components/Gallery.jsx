import './style/Gallery.css';
import { ReactMediaRecorder } from 'react-media-recorder';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [media, setMedia] = useState(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('-------' + media);
    console.log('sent');
  };

  useEffect(() => {
    axios
      .post(`http://localhost:5050/samplesent`, media, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((media) => {
        console.log(media);
      });
  }, [media]);

  return (
    <div className='gallery-box'>
      <div>
        <ReactMediaRecorder
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p>{status}</p>
              <button onClick={startRecording}>Start Recording</button>
              <button
                onClick={() => {
                  stopRecording();
                  setMedia(mediaBlobUrl);
                }}
              >
                Stop Recording
              </button>
              <audio src={mediaBlobUrl} controls autoPlay />
              <form onSubmit={handleSubmit}>
                <input type='hidden' value={mediaBlobUrl} />
                <input type='submit' value='Send' />
              </form>
            </div>
          )}
        />
      </div>
    </div>
  );
};
export default Gallery;
