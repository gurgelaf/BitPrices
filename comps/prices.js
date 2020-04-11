import { useState } from "react";

const Prices = props => {
  const [currency, setCurrency] = useState("USD");

  return (
    <div>
      <p>
        Bitcoin => {props.bpi[currency].code}: <br />
        <strong>{props.bpi[currency].rate}</strong>
      </p>
      <select onInput={e => setCurrency(e.target.value)}>
        <option value={currency}>{currency}</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default Prices;