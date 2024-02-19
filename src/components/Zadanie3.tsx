import { useState } from "react";
import { Tabela } from "./knur_components/Tabela";

export const Zadanie3 = (dane) => {
  const [mojeDane, setMojeDane] = useState(dane.dane);

  

  return (
    <>
      <hr/>
      <h2>Zadanie3</h2>
      <Tabela dane={mojeDane}></Tabela>
      <hr/>
      <h2>Zadanie4</h2>
      <button onClick={()=>{
        const posortowana = [...dane.dane].sort((a,b)=>a.wiek-b.wiek);
        const posortowanaOdwrotnie = [...dane.dane].sort((a,b)=>b.wiek-a.wiek);
       mojeDane[0] === posortowana[0] ? setMojeDane(posortowanaOdwrotnie) : setMojeDane(posortowana);
      }}>sortuj dane knurze</button>

    </>
  );
};
6