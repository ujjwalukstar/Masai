import BottomMainLeft from './BottomMainLeft';
import BottomMainRight from './BottomMainRight';

function BottomSection({ userName }) {
  return (
    <div className="bottom-section">
      <h2>Bottom Section</h2>
      <div className="columns">
        <BottomMainLeft userName={userName} />
        <BottomMainRight userName={userName} />
      </div>
    </div>
  );
}

export default BottomSection;