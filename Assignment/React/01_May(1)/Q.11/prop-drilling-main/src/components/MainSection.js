import LeftSide from './LeftSide';
import RightSide from './RightSide';

function MainSection({ userName }) {
  return (
    <div className="main-section">
      <h2>Main Section</h2>
      <div className="columns">
        <LeftSide userName={userName} />
        <RightSide userName={userName} />
      </div>
    </div>
  );
}

export default MainSection;