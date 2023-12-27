import ButtonIcon from "../assets/images/icon-arrow.svg";

const inputStyles =
  "rounded-md border-solid border border-gray-200 hover:border-purple-300 py-2 px-1  w-24 text-black-700 mb-6 focus:outline-none";

const labelStyles = "text-gray-800 tracking-widest text-xs mb-1";

function DateInputForm() {
  return (
    <div className="relative">
      <form className=" flex border-b-2 ">
        <div className="flex flex-col mx-4">
          <label className={labelStyles}>DAY</label>
          <input className={inputStyles} placeholder="DD" required />
        </div>
        <div className="flex flex-col mx-4">
          <label className={labelStyles}>MONTH</label>
          <input className={inputStyles} placeholder="MM" required />
        </div>
        <div className="flex flex-col mx-4">
          <label className={labelStyles}>YEAR</label>
          <input className={inputStyles} placeholder="YYYY" required />
        </div>
      </form>
      <img
        className="bg-purple-500 hover:bg-black rounded-full p-2 float-right absolute -right-10 top-16 max-w-12 max-h-12"
        src={ButtonIcon}
        alt="img"
      />
    </div>
  );
}

export default DateInputForm;
