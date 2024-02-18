export const Tabela = (dane: any) => {
  const mojeDane = dane.dane.dane;
  return (
    <>
      <p>Tabela</p>
      <table>
        <thead>
          {mojeDane.map((obiekt, i) => {
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
