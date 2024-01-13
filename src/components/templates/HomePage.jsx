// Hooks
import { useEffect, useState } from "react";

// Components
import TableCoin from "../modules/TableCoin.jsx";
import Pagination from "../modules/Pagination.jsx";

// services
import { getCoinList } from "../../services/cryptoApi.js";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <div>
      <Pagination />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
