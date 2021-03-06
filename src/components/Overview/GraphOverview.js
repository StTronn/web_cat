import React from "react";
import { URL } from "../../utils";
import Spinner from "react-spinkit";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Cointainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const LoadingCointainer = styled.div`
  display: grid;
  height: 40vh;
  align-items: center;
  justify-items: center;
`;

export default class OverviewGraph extends React.Component {
  state = {
    mode: "Rank", //2 modes Rank,Size
    loading: false,
    data: [],
  };

  fetchdata = () => {
    let { mode, loading } = this.state;
    let url = URL + "/getAllClusterData" + "/2020-05-23/2020-05-18";

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

  handleMode = (mode) => {
    this.setState({ mode }, this.fetchdata);
  };

  componentDidMount() {
    this.fetchdata();
  }

  render() {
    const COLORS = ["#2C7A7B", "#E53E3E", "#FFBB28", "#FF8042"];

    let { data, mode } = this.state;
    data = data.map((entry) => {
      console.log("data", data);
      return {
        cluster_no: entry.cluster_no,
        cluster_name: entry.cluster_name,
        Current: mode === "Rank" ? entry.primary : entry.size,
        Change:
          mode === "Rank"
            ? Math.abs(entry.secondary)
            : Math.abs(entry.size_change),
        color: entry.secondary > 0 ? COLORS[0] : COLORS[1],
      };
    });
    if (data.length !== 0) {
      return (
        <Cointainer>
          <Button mode={mode} handleMode={this.handleMode} />
          <ResponsiveContainer width={1000} height={3400}>
            <BarChart
              width={900}
              layout="vertical"
              height={3300}
              data={data}
              margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
            >
              <Legend
                wrapperStyle={{ top: 0, left: 25 }}
                payload={[
                  {
                    id: "pr",
                    value: mode === "Rank" ? "Score" : mode,
                    type: "square",
                    color: "#2A4365",
                  },
                  {
                    id: "pc",
                    value:
                      " + " + (mode === "Rank" ? "Score" : mode) + " change",
                    type: "square",
                    color: COLORS[0],
                  },
                  {
                    id: "nc",
                    value:
                      " - " + (mode === "Rank" ? "Score" : mode) + " change",
                    type: "square",
                    color: COLORS[1],
                  },
                ]}
              />
              <XAxis type="number" />
              <YAxis type="category" dataKey="cluster_name" />
              <Tooltip />
              <Bar name={"Current " + mode} dataKey="Current" fill="#2A4365" />
              <Bar dataKey="Change">
                {data.map((entry, index) => {
                  return <Cell fill={entry.color} key={index} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Cointainer>
      );
    } else {
      return (
        <LoadingCointainer>
          {" "}
          <Spinner name="folding-cube" color="teal" />{" "}
        </LoadingCointainer>
      );
    }
  }
}

function Button({ mode, handleMode }) {
  let selectedClass =
    "w-32 bg-white tracking-wide text-gray-800 font-bold rounded-sm border-b-4 border-teal-500 hover:border-teal-600 hover:bg-teal-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center";
  let normalClass =
    "w-32 bg-white tracking-wide text-gray-800 font-bold rounded-sm border-b-4 hover:border-teal-600 hover:bg-teal-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center";

  return (
    <div className="flex my-8">
      <div className="m-3">
        <button
          onClick={() => handleMode("Rank")}
          className={mode === "Rank" ? selectedClass : normalClass}
        >
          <span className="mx-auto">Score</span>
        </button>
      </div>
      <div className="m-3">
        <button
          onClick={() => handleMode("Size")}
          className={mode === "Size" ? selectedClass : normalClass}
        >
          <span className="mx-auto">Size</span>
        </button>
      </div>
    </div>
  );
}
