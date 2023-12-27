import DateInputForm from "./components/DateInputForm";
import AgeDisplay from "./components/AgeDisplay";

import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-white py-8  pl-4 pr-16 rounded-t-xl  rounded-bl-xl rounded-br-custom">
        <DateInputForm />
        <AgeDisplay />
      </div>
    </>
  );
}

export default App;
