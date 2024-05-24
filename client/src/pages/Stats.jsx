import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

function Stats(props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="title">Stats Page for {props.region}</h1>
      <Filter region={props.region} />
      {/* table showing stats */}
      <Button onClick={() => navigate("/")} variant="contained" size="large">
        Go Back
      </Button>
    </div>
  );
}

export default Stats;
