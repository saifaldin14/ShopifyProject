import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";

const DatePicker = (props) => {
  // The first commit of Material-UI
  const [selectedStartDate, setSelectedStartDate] = React.useState(
    new Date("2021-09-10T21:11:54")
  );

  const [selectedEndDate, setSelectedEndDate] = React.useState(
    new Date("2021-09-10T21:11:54")
  );

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date.toISOString().split("T")[0]);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date.toISOString().split("T")[0]);
  };

  const handleUpdateData = () => {
    props.onGetNasaData(selectedStartDate, selectedEndDate);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={selectedStartDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={selectedEndDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <Button onClick={handleUpdateData}>Submit</Button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
