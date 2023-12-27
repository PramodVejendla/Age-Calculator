function AgeDisplay({ day, month, year }) {
  return (
    <>
      <div className="text-6xl pt-8 italic text-gray-800 text-6xl font-semibold">
        <h1>
          <span className="text-purple-600  mx-4 ">{year}</span>years
        </h1>
        <h1>
          <span className="text-purple-600 mx-4">{month}</span>months
        </h1>
        <h1>
          <span className="text-purple-600 mx-4">{day}</span>days
        </h1>
      </div>
    </>
  );
}

export default AgeDisplay;
