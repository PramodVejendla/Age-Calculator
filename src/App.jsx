import { useState } from "react";
import DateInputForm from "./components/DateInputForm";
import AgeDisplay from "./components/AgeDisplay";

import "./App.css";

function App() {
  const id = Math.floor(Math.random() * 10000);
  const [age, setAge] = useState([
    {
      id,
      ageDays: "--",
      ageMonths: "--",
      ageYears: "--",
    },
  ]);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  // console.log(year, month, day);

  const calculateAgeHandler = (data) => {
    const ageYears = year - data[0].year;

    const ageMonths = month - data[0].month;

    const ageDays = day - data[0].day;

    const calculatedAge = [
      {
        id,
        ageYears,
        ageMonths,
        ageDays,
      },
    ];
    setAge(calculatedAge);
  };

  return (
    <>
      <div className=" bg-white py-10  pl-4 pr-16 rounded-t-xl  rounded-bl-xl rounded-br-custom">
        <DateInputForm onSave={calculateAgeHandler} />
        {age.map((item) => {
          return (
            <AgeDisplay
              key={item.id}
              id={item.id}
              day={item.ageDays}
              month={item.ageMonths}
              year={item.ageYears}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
