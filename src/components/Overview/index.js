import React from "react";
import { URL } from "../../utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export default class Overview extends React.Component {
  state = {
    mode: "Rank", //2 modes Rank,Size
    loading: false,
    data: [],
  };

  fetchdata = () => {
    let { mode, loading } = this.state;
    let url = URL + "/getAllClusterDataOf" + mode + "/2020-05-02";

    this.setState({ loading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("overview data", data);
        this.setState({ data, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ data: [], loading: false });
      });
  };

  componentDidMount() {
    this.fetchdata();
  }

  render() {
    const COLORS = ["#38A169", "#E53E3E", "#FFBB28", "#FF8042"];

    let { data } = this.state;
    data = data.map((entry) => {
      return {
        cluster_no: entry.cluster_no,
        cluster_name: entry.cluster_name,
        Current: entry.primary,
        Change: Math.abs(entry.secondary),
        color: entry.secondary > 0 ? COLORS[0] : COLORS[1],
      };
    });
    if (data.length !== 0) {
      return (
        <BarChart
          width={900}
          layout="vertical"
          height={3300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <Legend />
          <XAxis type="number" />
          <YAxis type="category" dataKey="cluster_name" />
          <Tooltip />
          <Bar dataKey="Current" fill="#38B2AC" />
          <Bar dataKey="Change">
            {data.map((entry, index) => {
              return <Cell fill={entry.color} key={index} />;
            })}
          </Bar>
        </BarChart>
      );
    } else {
      return <div> hello</div>;
    }
  }
}
