import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Задачи", "Время в течение дня"],
  ["Работа", 11],
  ["Еда", 2],
  ["Учеба", 3],
  ["Отдых", 2],
  ["Сон", 7],
];

export const options = {
  title: "Распорядок дня",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"200%"}
      height={"400px"}
    />
  );
}

export default App;
