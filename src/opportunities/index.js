import './index.css';
import Posts from './posts';

const Opportunities = () => {
  return (
    <>
      <div className="background-teal text-white">
        <img
          src={require('../images/centennial.jpg')}
          className="w-100 mb-5 image-height-300"
        />
        <span className="fs-1 d-flex justify-content-center">
          OPPORTUNITIES
        </span>
        <Posts />
      </div>
    </>
  );
};

export default Opportunities;
