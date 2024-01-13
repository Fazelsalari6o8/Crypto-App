// Hooks
import { useEffect, useState } from "react";

// Components
import TableCoin from "../modules/TableCoin.jsx";
import Pagination from "../modules/Pagination.jsx";
import Search from "../modules/Search.jsx";

// services
import { getCoinList } from "../../services/cryptoApi.js";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency), {
          signal: controller.signal,
        });
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };

    getData();

    return () => controller.abort();
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
