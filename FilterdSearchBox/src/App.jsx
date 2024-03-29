import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const states = [
    { id: "1", name: "Gujarat" },
    { id: "2", name: "Delhi" },
    { id: "3", name: "Punjab" }
  ];  
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(states);
  }, []);
  
  const cities = [
    { id: "1", cityId: "1", name: "Ahmedabad"},
    { id: "2", cityId: "2", name: "New Delhi"},
    { id: "3", cityId: "3", name: "Amtrutsir"}
  ];
  const [city, setCity] = useState([]);
  const handleState = (id) => {
    const data = cities.filter(x => x.cityId === id);
    setState(data);
  };


  return (
    <>
      <section className="main-con">
        <h2>Country, state & City Selector:-</h2>
        <div className="main-box">
          <div>
            <select
              name=""
              id="ddlState"
              className="select-control"
              onChange={(e) => handleState(e.target.value)}
            >
              <option value="0">Select State</option>
              {state && state !== undefined ?
               state.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>                        
                        {ctr.name}
                      </option>
                    )
                  })
                : "No state"}
            </select>
            <select
              name=""
              id="ddlCity"
              className="select-control"              
            >
              <option value="0">Select City</option>
              {city && city !== undefined
                ? city.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>
                        {ctr.name}
                      </option>
                    )
                  })
                : "No city"}
            </select>
          </div>
          <div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default App;
