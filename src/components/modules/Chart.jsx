// hooks
import { useState } from "react";

// helper
import { convertData } from "../../helpers/convertData.js";

// style
import styles from "./Chart.module.css";

function Chart({ chart, setChart }) {
  console.log(chart);
  const [type, setType] = useState("total_volumes");

  convertData(chart, type);
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>coins chart</div>
    </div>
  );
}

export default Chart;
