// Hooks
import { useEffect, useState } from "react";

// Components
import TableCoin from "../modules/TableCoin.jsx";

// services
import { getCoinList } from "../../services/cryptoApi.js";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };
    getData();
  }, []);
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
