import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter";
import Entry from "../components/Entry";
import { Button } from "@mui/material";

function Stats(props) {
  const navigate = useNavigate();

  return (
    <div className="stats">
      <h1 className="title">Stats Page for {props.region}</h1>
      <Filter region={props.region} />
      <Entry region={props.region} />
      {/* table showing stats */}

      <Button
        onClick={() => navigate("/")}
        variant="contained"
        size="large"
        sx={{ marginTop: "auto", marginBottom: "auto", alignSelf: "center" }}
      >
        Go Back
      </Button>
    </div>
  );
}

export default Stats;
