import Styled from "./chart.styles";
import {
  Chart as ChartJS,
  CategoryScale,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  ScatterController,
  Tooltip,
  TooltipLabelStyle,
  TooltipItem,
  ChartOptions,
} from "chart.js";
import { useTheme } from "styled-components";
import { useAppSelector } from "../../app/hooks";

const Chart = () => {
  const theme = useTheme();
  const { showDecimalPlaces } = useAppSelector(({ config }) => config);
  const { stats, elapsedTime } = useAppSelector(({ type }) => type);

  const { errorCount, raw, wpm } = stats;

  const labels = Array(stats.raw.length)
    .fill(0)
    .map((i) => i + 1);

  if (stats.raw.length > elapsedTime) {
    labels[stats.raw.length] = elapsedTime;
  }

  console.log( "currentTheme" ,theme);

  const styles = {
      font : { family : theme.fontFamily},
      color : theme.sub
  }

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "raw",
        fill: true,
        data: raw.map((r) =>
          showDecimalPlaces === "on" ? r.toFixed(2) : Math.floor(r)
        ),
        borderColor: theme.sub,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 2,
        lineTension: 0.3,
        yAxisID: "wpm",
        order: 3,
        pointRadius: 2,
      },
      {
        type: "line" as const,
        label: "wpm",
        fill: true,
        data: wpm.map((w) =>
          showDecimalPlaces === "on" ? w.toFixed(2) : Math.floor(w)
        ),
        borderColor: theme.main,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 2,
        lineTension: 0.3,
        yAxisID: "wpm",
        order: 2,
        pointRadius: 2,
      },
      {
        type: "scatter" as const,
        label: "errors",
        data: errorCount.map((e) => (e ? e : null)),
        borderColor: theme.colorfulError,
        pointBackgroundColor: theme.colorfulError,
        borderWidth: 2,
        yAxisID: "error",
        order: 1,
        pointStyle: "crossRot",
      },
    ],
  };

  return <Styled.Chart type="line" options={options} data={data} />;
};

ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  ScatterController,
  Tooltip
);

export default Chart;
