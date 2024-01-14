// hooks
import { useState } from "react";

// helper
import { convertData } from "../../helpers/convertData.js";

// library
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// style
import styles from "./Chart.module.css";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt={chart.coin.symbol} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types}>
          <button>Prices</button>
          <button>Market Caps</button>
          <button>Total Volumes</button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Price:</p>
            <span>$ {chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>$ {chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>{chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
