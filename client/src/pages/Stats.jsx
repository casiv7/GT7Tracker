import { useNavigate } from "react-router-dom";

function Stats(props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Stats Page for {props.region}</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Stats;
