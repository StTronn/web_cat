import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

class BarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day1: 1,
      day1input: 1,
      day2: 2,
      day2input: 2,
    };
  }

  handleDayInput = (event, box) => {
    let { arr } = this.props;
    let input = event.target.value;
    if (input < 1 || input > arr.length - 1)
      this.setState({ [box + "input"]: input });
    else this.setState({ [box]: input, [box + "input"]: input });
  };

  resetInput = (box) => {
    let value = this.state[box];
    this.setState({ [box + "input"]: value });
  };

  render() {
    let { day1, day2, day1input, day2input } = this.state;
    console.log("day", day2input, day2);
    let { arr } = this.props;
    let data = [
      {
        name: "day " + day1,
        green: arr[day1],
      },
      {
        name: "day " + day2,
        purple: arr[day2],
      },
    ];
    return (
      <div>
        <div>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="green" fill="#38A169" />
            <Bar dataKey="purple" fill="#805AD5" />
          </BarChart>
        </div>
        <div style={{ width: "500px" }} className="flex justify-center">
          <div class="flex items-center align-center">
            <div class="w-16 mx-8 ">
              <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold text-center">
                day
              </label>
              <input
                class="w-16 shadow-inner p-4 border-0 bg-gray-100 text-center"
                type="text"
                name="lat"
                onChange={(e) => {
                  this.handleDayInput(e, "day1");
                }}
                onBlur={() => this.resetInput("day1")}
                value={day1input}
              />
            </div>
            <div class=" w-16 mx-8">
              <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold text-center">
                day
              </label>
              <input
                class="w-16 shadow-inner p-4 border-0 bg-gray-100 text-center"
                type="text"
                name="lon"
                onChange={(e) => {
                  this.handleDayInput(e, "day2");
                }}
                onBlur={() => this.resetInput("day2")}
                value={day2input}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BarInfo;
