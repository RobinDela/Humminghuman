import './style/Homepage.css';
import Gallery from './Gallery';

const Homepage = () => {
  return (
    <div className='Homepage'>
      <div className='gallery'>
        <Gallery />
        <Gallery />
        <Gallery />
      </div>
    </div>
  );
};
export default Homepage;
