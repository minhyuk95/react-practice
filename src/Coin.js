import {useEffect, useState} from "react";

function App(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [balance, setBalance] = useState(0);
    const [coinPrice, setCoinPrice] = useState(0);
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        })
    }, []);
    const onChange = (event) => {
        console.log(event.target.value);
        setCoinPrice(coins[event.target.value].quotes.USD.price);
    }
    const onBalanceChange = (event) => setBalance(event.target.value);
    // console.log(coins);
    return <div>
        <h1>The Coin({coins.length})</h1>
        <h1>{coinPrice}</h1>
        {loading ? <strong>Loading...</strong>:
        <select onChange={onChange}>
            {coins.map((item, index) => <option value={index} key={index}>{item.name}({item.symbol})  {item.quotes.USD.price}</option>)}
        </select>}
        <input type='number' onChange={onBalanceChange} value={balance} placeholder='write your balance'></input>
        <input type='number' value={balance / coinPrice} disabled={true}/>
        </div>
}

export default App;