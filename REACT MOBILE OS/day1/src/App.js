import "./App.css";
import Head from "./components/myfctn"


function App() {

  const Pointers = [
    {
      heading: "Mobile Operating System",
      items: ["Android", "Blackberry", "iPhone", "Windows Phone"],
    },
    {
      heading: "Mobile Manufacturers",
      items: ["Samsung", "HTC", "Micromax", "Apple"],
    },
  ];

  return (
    <div>
      {Pointers.map((el) => {
        return <Head el={el}></Head>;
      })}
    </div>
  );
}



export default App;
