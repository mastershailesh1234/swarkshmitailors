import React from "react";
import "./Pricing.css";
const price = [
  { name: "NORMAL DELIVERY", value: "FREE" },
  { name: "EMERGENCY 12 HOUR DELIVERY", value: "50" },
  { name: "SARI FALSE PAR SEWING", value: "50" },
  { name: "KURTI FITTINGS", value: "10" },
  { name: "NIGHTY ARM SEWING", value: "15" },
  { name: "NIGHTY FULL SEWING", value: "20" },
  { name: "KURTI BACK EXTENSION SEWING", value: "30" },
  { name: "LUNGI SEWING", value: "15" },
  { name: "BLOUSE HOOK SEWING", value: "15" },
  { name: "BLOUSE	 BUTTON SEWING", value: "20" },
  { name: "BLOUSE FULL SEWING", value: "10" },
  { name: "NEW BLOUSE MAKING", value: "200" },
  { name: "MOSQUITO NET FULL SEWING", value: "30" },
  { name: "PETTICOAT MAKING", value: "50" },
  { name: "PETTICOAT FULL SEWING", value: "30" },
  { name: "PETTICOAT TORN SEWING", value: "10" },
  { name: "BED SHEET TWO SIDE SEWING", value: "20" },
  { name: "PILLOW COVER TORN SEWING", value: "10" },
  { name: "PILLOW COVER FULL SEWING", value: "10" },
  { name: "PILLOW COVER NEW MAKING", value: "20" },
  { name: "WINDOW COVER SEWING", value: "30" },
  { name: "SUNSHADE COVER SEWING", value: "30" },
  { name: "ANY TYPE TORN SEWING(SMALL)", value: "10" },
  { name: "ANY TYPE TORN SEWING(LARGE)", value: "15" },
];
const Pricing = () => {
  return (
    <div className="container" style={{ marginTop: "200px" }}>
      <h2 style={{ margin: "10px", borderBottom: "1px solid black" }}>
        Pricing
      </h2>
      <div className="pricing_table">
        {price.map((ele, key) => {
          return (
            <div className="price_row">
              <div className="price_row_left">{ele.name}</div>
              <div className="price_row_right">{ele.value}₹</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
