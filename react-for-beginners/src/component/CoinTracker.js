import { useState, useEffect } from "react";

//맨 첫 화면에 로딩을 보여준후
//앱이 처음으로 실행될때 coin을 select에 담아 보여준다

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //setLoading(false)를 useEffect내에서 fetch 다음 코드로 넣으면 앱이 처음 실행되자마자 코드가 실행되어서
  //밑에 return문에서 loading을 true, false로 나눴을때가 구분이 안됨
  //하지만 fetch함수 안에 넣으면 fetch함수가 실행되는데 조금의 시간이 걸리므로 loading 변수가 앱이 실행되자마자 true이었다가 일정 시간이 지난 뒤에 false로 바뀌게 됨
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              name: {coin.name} symbol: {coin.symbol} price:{" "}
              {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CoinTracker;
