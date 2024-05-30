import Button from "@mui/material/Button";
import Dropdowns from "./Dropdowns";

function Filter(props) {
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    console.log(track);
    console.log(layout);
    console.log(brand);
    console.log(model);
  }

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <Dropdowns region={props.region} giveValues={getDropdownValues} />
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
