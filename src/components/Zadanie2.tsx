import { useState, useEffect } from "react";

export const Zadanie2 = () => {
  const [mujInput, setMujInput] = useState("");
  const [obrazek, setObrazek] = useState("");
  console.log(mujInput);
  useEffect((): any => {
    if (mujInput === "papiez") {
      setObrazek(
        "https://th.bing.com/th/id/OIP.9txRv4RhlNjPyvk248ghBAHaI5?rs=1&pid=ImgDetMain",
      );
    } else {
      setObrazek("");
    }
  }, [mujInput]);

  return (
    <>
      <hr></hr>
      <h2>Zadanie2</h2>
      <input
        value={mujInput}
        onChange={(event) => {
          setMujInput(event.target.value);
        }}
      />
      <img src={obrazek} alt="" />
    </>
  );
};
