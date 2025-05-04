function BottomMainRight({ userName }) {
    return (
      <div className="bottom-main-right">
        <h3>Bottom Main Right (Deeply Nested)</h3>
        <p>Final destination of props drilling: {userName}</p>
      </div>
    );
  }
  
  export default BottomMainRight;