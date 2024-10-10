import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import All from "./components/All";
import Fresh from "./components/Pages/Fresh";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

// //  const [data, setData] = useState([]);
//   const fetchData = async () => {
//     try {
//       const response = await fetch();
//       const jsonData = await response.json();
//       console.log(jsonData);
//       setData(jsonData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
