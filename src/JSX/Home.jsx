import { data, variacaoT, ordenado, variacaoM, mes } from "../data/data";

export function Home() {
  let x = -1;
  function color(params) {
    let sty = "text-green-700";
    if (params < 0) {
      sty = "text-red-700";
    }
    if (params == 0) {
      sty = "";
    }
    return sty;
  }
  function formataMes(e1) {
    return mes[e1.month];
  }
  function variacaoValor(params) {
    return (params * 10).toFixed(2).replace(/\./g, ",");
  }

  return (
    <>
      {data.investments.map((e, i) => {
        return (
          <div key={e.id} className="border-2 border-grey-500/75 mb-2 p-2 ">
            <h2 className="flex justify-center font-bold text-xl ">
              {e.description}
            </h2>
            <h2 className="flex justify-center font-semibold">
              Rendimento Total:
              <p className={color(variacaoT[i])}>R${variacaoValor(variacaoT[i])}</p>
              <h2 className={color(variacaoT[i])}> ({variacaoT[i]}%)</h2>
            </h2>
            <div>
              {ordenado.map((e1) => {
                if (e1.investmentId === e.id) {
                  x++;
                  return (
                    <>
                      <form key={e1.id} className="conteiner flex justify-between">
                        <div className="flex">
                          <div className="mr-6 font-mono ">
                            {formataMes(e1)}/{e1.year}
                          </div>
                          <div className={color(variacaoM[x])}>
                            R$ {e1.value.toFixed(2).replace(/\./g, ",")}
                          </div>
                        </div>
                        <div className={`${color(variacaoM[x])}`}>
                          {variacaoM[x].toFixed(2).replace(/\./g, ",")}%
                        </div>
                      </form>
                    </>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
