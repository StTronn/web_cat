import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import styled from "styled-components";
import { SingleDatePicker } from "react-dates";
import "./singledate.css";

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

  handleDateChange = (date) => {
    let { updateDate } = this.props;
    updateDate(date);
    this.setState({ date });
  };

  componentDidMount() {
    let { date } = this.props;
    this.setState({ date });
  }

  render() {
    const falseFunc = () => false;
    return (
      <Cointainer className="animate__animated animate__fadeInDown">
        <SingleDatePicker
          numberOfMonths={1}
          showDefaultInputIcon={true}
          regular={true}
          date={this.state.date}
          onDateChange={(date) => this.handleDateChange(date)}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          isOutsideRange={falseFunc}
          openDirection="up"
          hideKeyboardShortcutsPanel={true}
        />
      </Cointainer>
    );
  }
}
