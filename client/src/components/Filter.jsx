import Button from "@mui/material/Button";
import Dropdowns from "./Dropdowns";
import { useRef } from "react";

function Filter(props) {
  const dropdownRef = useRef();
  var track = "";
  var layout = "";
  var brand = "";
  var model = "";

  function getDropdownValues(values) {
    var [select, value] = values;
    switch (select) {
      case "Track":
        track = value;
        layout = "";
        break;
      case "Layout":
        layout = value;
        break;
      case "Brand":
        brand = value;
        model = "";
        break;
      case "Model":
        model = value;
        break;
      default:
        break;
    }
  }

  function resetFilter() {
    track = "";
    layout = "";
    brand = "";
    model = "";
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(track);
    console.log(layout);
    console.log(brand);
    console.log(model);
    dropdownRef.current?.reset();
    resetFilter();
    //make the call to db
  }

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <Dropdowns
        region={props.region}
        isEntry={false}
        giveValues={getDropdownValues}
        ref={dropdownRef}
      />
      <Button
        variant="contained"
        size="large"
        type="submit"
        sx={{ alignSelf: "center" }}
      >
        Search
      </Button>
    </form>
  );
}

export default Filter;
