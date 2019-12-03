import React from "react";

const millis = 6666666666;

let heurs = Math.floor((millis / (1000 * 60 * 60)) % 60);
let minute = Math.floor((millis / (1000 * 60)) % 60);
let second = Math.floor((millis / 1000) % 60);
heurs = heurs < 10 ? "0" + heurs : heurs;
minute = minute < 10 ? "0" + minute : minute;
second = second < 10 ? "0" + second : second;




function Timefunction() {
  return heurs + ":" + minute + ":" + second;
}
export default Timefunction;
