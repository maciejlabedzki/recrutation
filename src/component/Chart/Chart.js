import * as React from "react";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Legend,
  Title,
} from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";

import NoisySignalIcon from "../../img/noisySignal.png";
import OriginalSignalIcon from "../../img/originalSignal.png";

const SpecialMarkerComponent = ({ name, color }) => {
  const Icon = name === "Noisy signal" ? NoisySignalIcon : OriginalSignalIcon;
  // xlinkHref is use for safari
  return (
    <svg width={18} height={18} viewBox={Icon.viewBox}>
      <use fill={color} xlinkHref={`#${Icon.id}`} />
    </svg>
  );
};

const titleStyle = { margin: "auto" };
const TitleText = (props) => <Title.Text {...props} style={titleStyle} />;

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    const originalValue = Math.sin(i) / i;
    data.push({
      value: originalValue + (0.5 - Math.random()) / 10,
      originalValue,
      argument: i,
    });
  }
  return data;
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: generateData(2.5, 12, 0.1),
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div className="card">
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="Noisy signal"
            valueField="value"
            argumentField="argument"
          />

          <LineSeries
            name="Original signal"
            valueField="originalValue"
            argumentField="argument"
          />

          <Title text="Noisy and Original signals" textComponent={TitleText} />
          <Legend markerComponent={SpecialMarkerComponent} />
        </Chart>
      </div>
    );
  }
}
