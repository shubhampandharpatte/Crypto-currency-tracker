import React from "react";
import "./Coin.css";

const Coin = ({ name, image, symbol, price, volume, priceChange, marketCap, marketCapRank }) => {
  return (
    <tr>
      <td data-label="Coin"><img src={image} alt={name} style={{ width: '25px' }} /></td>
      <td data-label="Name">{name}</td>
      <td data-label="Symbol">{symbol.toUpperCase()}</td>
      <td data-label="Price">${price.toLocaleString()}</td>
      <td data-label="Market Cap Rank">{marketCapRank}</td>
      <td data-label="Price Change Percentage" style={{ color: priceChange < 0 ? "red" : "green" }}>
        {priceChange.toFixed(2)}%
      </td>
      <td data-label="Market Cap">${marketCap.toLocaleString()}</td>
      <td data-label="Volume">${volume.toLocaleString()}</td>
    </tr>
  );
};



export default Coin;
