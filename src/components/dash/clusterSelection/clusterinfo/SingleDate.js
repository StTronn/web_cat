import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import styled from "styled-components";
import { SingleDatePicker } from "react-dates";

const Cointainer = styled.div`
  display: grid;
  height: 40px;
  align-items: center;
  justify-items: center;
`;

export default class SingleDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: null,
    };
  }
  render() {
    return (
      <Cointainer>
        <SingleDatePicker
          numberOfMonths={1}
          regular={true}
          date={this.state.date}
          onDateChange={(date) => this.handleDateChange(date)}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          openDirection="up"
          hideKeyboardShortcutsPanel={true}
          displayFormat="DD-MM-YYYY"
        />
      </Cointainer>
    );
  }
}
