import { useState } from "react";
import ButtonIcon from "../assets/images/icon-arrow.svg";

const inputStyles =
  "rounded-md border-solid border border-gray-200 hover:border-purple-300 py-2 px-1  w-32 text-black-700  focus:outline-none";

const labelStyles = "text-gray-600 tracking-widest text-xs mb-1";
const errorStyles = "text-xs pt-1  text-red-600";

function DateInputForm(props) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [validBirthDate, setValidBirthDate] = useState(true);

  const DayChangeHandler = (e) => {
    setDay(e.target.value);
  };
  const MonthChangeHandler = (e) => {
    setMonth(e.target.value);
  };
  const YearChangeHandler = (e) => {
    setYear(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dayValid = months[month - 1];
    // console.log(dayValid);

    if (dayValid < day) {
      setValidBirthDate(false);
      return;
    }

    if (!day && !month && !year) {
      setIsEmpty(true);
      return;
    }

    const BirthDate = [
      {
        day,
        month,
        year,
      },
    ];
    props.onSave(BirthDate);

    setDay("");
    setMonth("");
    setYear("");
    setValidBirthDate(true);
    setIsEmpty(false);
  };

  return (
    <div className="relative">
      <form className=" flex border-b-2 pb-6" onSubmit={SubmitHandler}>
        <div className="flex flex-col mx-4">
          <label className={isEmpty ? errorStyles : labelStyles}>DAY</label>
          <input
            className={inputStyles}
            placeholder="DD"
            type="number"
            value={day}
            onChange={DayChangeHandler}
            // required
          />
          {isEmpty === true ? (
            <span className={errorStyles}>This field is Required</span>
          ) : null}
          {!validBirthDate || day > 31 || day < 0 ? (
            <span className={errorStyles}>Enter valid day</span>
          ) : null}
        </div>
        <div className="flex flex-col mx-4">
          <label className={isEmpty ? errorStyles : labelStyles}>MONTH</label>
          <input
            className={inputStyles}
            placeholder="MM"
            type="number"
            value={month}
            onChange={MonthChangeHandler}
            // required
          />
          {isEmpty === true ? (
            <span className={errorStyles}>This field is Required</span>
          ) : null}
          {month > 12 || month < 0 ? (
            <span className={errorStyles}>Enter valid month</span>
          ) : null}
        </div>
        <div className="flex flex-col mx-4">
          <label className={isEmpty ? errorStyles : labelStyles}>YEAR</label>
          <input
            className={inputStyles}
            placeholder="YYYY"
            type="number"
            value={year}
            onChange={YearChangeHandler}
            // required
          />
          {isEmpty === true ? (
            <span className={errorStyles}>This field is Required</span>
          ) : null}
          {year > 2024 || year < 0 ? (
            <span className={errorStyles}>Enter valid year</span>
          ) : null}
        </div>
        <button>
          <img
            className="bg-purple-500 hover:bg-black rounded-full p-2 float-right absolute -right-10 top-16 max-w-12 max-h-12"
            src={ButtonIcon}
            alt="img"
          />
        </button>
      </form>
    </div>
  );
}

export default DateInputForm;
