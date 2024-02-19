import { useState } from "react";
export const Zadanie1 = () => {
  const Button = (props) => {
    return (
      <>
        <p>{props.licznik}</p>
        <button onClick={props.click}>Knurzy Button</button>
      </>
    );
  };

  const [licznik, setLicznik] = useState(0);

  return (
    <>
      <hr/>
      <h2>Zadanie1</h2>
      <Button licznik={licznik} click={() => setLicznik(licznik + 1)}></Button>
    </>
  );
};
