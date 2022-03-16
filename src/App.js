// import { useEffect, useState } from "react";
import "./App.css";

// function ServiceItem({ serviceObj }) {
//   let { name, cost, imageUrl, altText } = serviceObj;
//   return (
//     <div className="service-item">
//       <h1>{name}</h1>
//       <h3>${cost}</h3>
//       <img src={imageUrl} alt={altText} />
//     </div>
//   );
// }

// function ServiceList({ services }) {
//   return (
//     <div className="service-container">
//       {services.map((serviceObj) => (
//         <ServiceItem serviceObj={serviceObj} />
//       ))}
//     </div>
//   );
// }

function App() {
  // let [services, setServices] = useState([]);

  // useEffect(() => {
  //   // make API Call, get service prices
  //   //make a pretty array
  //   setServices([
  //     // set stateful value
  //     { name: "Service 1", cost: 100, imageUrl: ``, altText: "" },
  //     { name: "Service 2", cost: 100, imageUrl: ``, altText: "" },
  //     { name: "Service 3", cost: 100, imageUrl: ``, altText: "" },
  //   ]);
  // }, []);

  return (
    <div className="App">
      <header className="App-header">Github Actions Demo Test</header>
      <div>A div containing words</div>

      <div>A second div</div>

      {/* <ServiceList services={services} /> */}
    </div>
  );
}

export default App;
