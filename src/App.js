import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Filter from "./components/Filter/filter";
import Body from "./components/Body/body";

function App() {
  const [jobs, setJobs] = useState([]);

  const getData = () => {
    fetch(
      "https://serene-basin-16003.herokuapp.com/https://jobs.github.com/positions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Filter />
      <Body jobs={jobs} />
    </div>
  );
}

export default App;
