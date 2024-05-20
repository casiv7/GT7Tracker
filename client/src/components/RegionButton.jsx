import { useNavigate } from "react-router-dom";

function RegionButton(props) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="btn"
        type="button"
        onClick={() => navigate(props.region)}
      >
        {props.region}
      </button>
    </div>
  );
}

export default RegionButton;
