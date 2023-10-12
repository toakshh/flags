import { useEffect, useState } from "react";

const cardStyle = {
  width: "200px",
  border: "1px solid #000",
  borderRadius: "10px",
  margin: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center"
};

const imageStyle = {
  width: "150px",
  height: "100px"
};

function App() {
    
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // async function fetchAPI() {}
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      })
      .catch((error) => console.error("Error occurred while fetching", error));
  }, []);
  return (
    <div style={containerStyle}>
      {countries ? countries?.map((country) => (
        <div key={country.cca3} style={cardStyle}>
          <img src={country.flags.png} alt="" style={imageStyle} />
          <h2>{country.name.common}</h2>
        </div>
      )): <h1>Please wait. We are working on that...</h1>}
    </div>
  );
}

export default App;