import React from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import styled from "styled-components";

const Cointainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

class DaySelector extends React.Component {
  state = {
    startDate: moment().subtract(10, "day"),
    endDate: moment(),
    focusedInput: null,
  };

  handleDateChange = ({ startDate, endDate }) =>
    this.setState({ startDate, endDate });

  handleFocusChange = (focusedInput) => this.setState({ focusedInput });

  render = () => (
    <Cointainer className="my-8">
      <DateRangePicker
        endDate={this.state.endDate}
        endDateId="endDate"
        focusedInput={this.state.focusedInput}
        isOutsideRange={() => null}
        showDefaultInputIcon={true}
        onDatesChange={this.handleDateChange}
        onFocusChange={this.handleFocusChange}
        startDate={this.state.startDate}
        startDateId="startDate"
      />
    </Cointainer>
  );
}

export default DaySelector;
