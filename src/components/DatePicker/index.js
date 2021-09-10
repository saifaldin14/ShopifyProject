import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";

const DatePicker = (props) => {
  // Define the initial start and end dates to be the current date
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  /**
   * Function to update the date of the startDate
   * @param {Date} date
   */
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date.toISOString().split("T")[0]);
  };

  /**
   * Function to update the date of the endDate
   * @param {Date} date
   */
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date.toISOString().split("T")[0]);
  };

  /**
   * Function to call the function that will dispatch
   * the action to fetch data between the startDate and endDate
   */
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
      </Grid>
      <Grid container justifyContent="space-around">
        <Button onClick={handleUpdateData}>Submit</Button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
