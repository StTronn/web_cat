import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class BarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day1: 1,
      day2: 2,
    };
  }

  render() {
    let { day1, day2 } = this.state;
    let { arr } = this.props;
    let data = [
      {
        name: "day " + day1,
        day1: arr[day1],
      },
      {
        name: "day " + day2,
        day2: arr[day2],
      },
    ];
    return (
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
          <Bar dataKey="day1" fill="#38A169" />
          <Bar dataKey="day2" fill="#805AD5" />
        </BarChart>
      </div>
    );
  }
}

export default BarInfo;
