import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Dropdowns from "./Dropdowns";
import { IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function Entry(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [formState, setFormState] = useState({
    track: "",
    layout: "",
    brand: "",
    model: "",
    lap_time: "",
  });
  const [formErrors, setFormErrors] = useState({});

  function getDropdownValues(values) {
    const [select, value] = values;
    switch (select) {
      case "Track":
        setFormState((prev) => ({ ...prev, track: value, layout: "" }));
        delete formErrors.track;
        break;
      case "Layout":
        setFormState((prev) => ({ ...prev, layout: value }));
        delete formErrors.layout;
        break;
      case "Brand":
        setFormState((prev) => ({ ...prev, brand: value, model: "" }));
        delete formErrors.brand;
        break;
      case "Model":
        setFormState((prev) => ({ ...prev, model: value }));
        delete formErrors.model;
        break;
      default:
        break;
    }
  }

  function validateEntry() {
    let newErrors = {};
    if (formState.track === "") {
      newErrors.track = true;
    }
    if (formState.layout === "") {
      newErrors.layout = true;
    }
    if (formState.brand === "") {
      newErrors.brand = true;
    }
    if (formState.model === "") {
      newErrors.model = true;
    }
    if (
      !/^([0-5]?[0-9]):([0-5]?[0-9])\.([0-9]?[0-9]?[0-9])$/.test(
        formState.lap_time
      )
    ) {
      newErrors.lap_time = true;
    }
    setFormErrors(newErrors);
    return newErrors;
  }

  async function addEntry(entry) {
    const response = await axios.post("http://localhost:4000/add", entry);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let errors = validateEntry();
    if (isEmpty(errors)) {
      addEntry(formState);
      close();
    }
  }

  function handleTime(event) {
    setFormState((prev) => ({ ...prev, lap_time: event.target.value }));
    delete formErrors.lap_time;
  }

  function isEmpty(obj) {
    for (let x in obj) {
      return false;
    }
    return true;
  }

  function resetEntry() {
    setFormState({
      track: "",
      layout: "",
      brand: "",
      model: "",
    });
    setFormErrors({});
  }

  function close() {
    resetEntry();
    setIsOpen(false);
  }

  return (
    <div className="entry">
      <Button onClick={() => setIsOpen(true)} variant="contained" size="large">
        Add Entry
      </Button>
      <Dialog open={isOpen} onClose={close} fullWidth>
        <DialogTitle>
          New Entry{" "}
          <IconButton sx={{ float: "right" }} onClick={close}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} noValidate>
            <Dropdowns
              region={props.region}
              giveValues={getDropdownValues}
              isEntry={true}
              trackError={formErrors.track}
              layoutError={formErrors.layout}
              brandError={formErrors.brand}
              modelError={formErrors.model}
            />
            <div className="time-input">
              <TextField
                name="time"
                label="Time"
                required
                fullWidth
                error={formErrors.lap_time}
                onBlur={handleTime}
              >
                Time
              </TextField>
            </div>
            <Button type="submit" variant="contained" fullWidth>
              Add
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Entry;
