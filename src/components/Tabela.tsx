
export const Tabela = (dane: any) => {
  return (
    <>
      <p>Tabela</p>
      <table>
        <thead>
          {
          dane.dane.map((obiekt, i) => {
            return (
              <tr key={"papaj" + i}>
                <th>{obiekt.nazwa}</th>
                <th>{obiekt.wiek}</th>
                <th>
                  <img src={obiekt.obrazek} alt="" height="150" />
                </th>
              </tr>
            );
          })}
        </thead>
      </table>
      </>
  );
};
