import React from "react";
import { URL } from "../../utils";
import Spinner from "react-spinkit";
import styled from "styled-components";
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

const ButtonCointainer = styled.div`
  display: grid;
`;

export default class OverviewGraph extends React.Component {
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

  handleMode = (mode) => {
    this.setState({ mode }, this.fetchdata);
  };

  componentDidMount() {
    this.fetchdata();
  }

  render() {
    const COLORS = ["#38A169", "#E53E3E", "#FFBB28", "#FF8042"];

    let { data, mode } = this.state;
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
        <Cointainer>
          <Button mode={mode} handleMode={this.handleMode} />
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
            <Bar dataKey="Current" fill="#2A4365" />
            <Bar dataKey="Change">
              {data.map((entry, index) => {
                return <Cell fill={entry.color} key={index} />;
              })}
            </Bar>
          </BarChart>
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
          <span className="mx-auto">Rank</span>
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