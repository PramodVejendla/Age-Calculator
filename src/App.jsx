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
  const cyear = currentDate.getFullYear();
  const cmonth = currentDate.getMonth() + 1;
  const cday = currentDate.getDate();

  const calculateAgeHandler = (data) => {
    const bYear = data[0].year;
    const bMonth = data[0].month;
    const bDay = data[0].day;

    let ageYears = cyear - bYear;
    let ageMonths;
    let ageDays;

    if (cmonth >= bMonth) {
      ageMonths = cmonth - bMonth;
    } else {
      ageYears--;
      ageMonths = 12 + cmonth - bMonth;
    }

    if (cday >= bDay) {
      ageDays = cday - bDay;
    } else {
      ageMonths--;
      ageDays = 31 + cday - bDay;
    }
    if (ageMonths < 0) {
      ageMonths = 11;
      ageYears--;
    }

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
