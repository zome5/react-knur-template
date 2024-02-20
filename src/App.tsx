import { Zadanie1 } from "./components/Zadanie1";
import { Zadanie2 } from "./components/Zadanie2";
import { Zadanie3 } from "./components/Zadanie3";
import { Zadanie5 } from "./components/Zadanie5";
import "./index.css";


function App() {
  const dane = [
    {
      nazwa: "papaj",
      wiek: 104,
      obrazek:
        "https://th.bing.com/th/id/OIP.9txRv4RhlNjPyvk248ghBAHaI5?rs=1&pid=ImgDetMain",
    },
    {
      nazwa: "Pan",
      wiek: 102,
      obrazek:
        "https://th.bing.com/th/id/OIP.1LS1c8RksgOUsGVk2yXEsQAAAA?w=139&h=150&c=7&r=0&o=5&pid=1.7",
    },
    {
      nazwa: "Jaweł",
      wiek: 103,
      obrazek:
        "https://th.bing.com/th/id/OIP.ZGHT3JC497thIrbjaDIR0AHaJJ?w=135&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      nazwa: "Jp2",
      wiek: 100,
      obrazek:
        "https://th.bing.com/th/id/OIP.Lf2A4RPwpp_KleK_qoCvzQHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      nazwa: "pope",
      wiek: 101,
      obrazek:
        "https://www.bing.com/th/id/OGC.46bb6eb3af24494bf92025053fd74839?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f46bb6eb3af24494bf92025053fd74839%2ftenor.gif%3fitemid%3d7342723&ehk=CUKZLZs8ropLZBML02lDh41B6l96MN4gSaXVS%2f1Z6bU%3d",
    },
  ];
  return (
    <>
      <h1>knurcamp eloooo</h1>

      <Zadanie1></Zadanie1>
      <Zadanie2></Zadanie2>
      <Zadanie3 dane={dane}></Zadanie3>
      <Zadanie5></Zadanie5>
    </>
  );
}

export { App };
