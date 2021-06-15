import './style/Gallery.css';
import { ReactMediaRecorder } from 'react-media-recorder';

const Gallery = () => {
  return (
    <div className='gallery-box'>
      <div>
        <ReactMediaRecorder
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p>{status}</p>
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
              <audio src={mediaBlobUrl} controls autoplay loop />
            </div>
          )}
        />
      </div>
    </div>
  );
};
export default Gallery;
