// Importing the css for the info
import "./css/info.css";

const Info = ({ ties, oWins, xWins }) => {
  return (
    <div className="info">
      <div className="infoBox x">
        X<div>{xWins}</div>
      </div>
      <div className="infoBox TIES">
        TIES<div>{ties}</div>
      </div>
      <div className="infoBox o">
        O<div>{oWins}</div>
      </div>
    </div>
  );
};

export default Info;
