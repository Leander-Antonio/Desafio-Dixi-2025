import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TableFuncionario() {
  const navigate = useNavigate();
  const [pagina, setPagina] = useState(1);
  const porPagina = 8;

  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/funcionarios")
      .then((res) => res.json())
      .then((data) => {
        console.log("FUNCIONARIOS DO BACKEND:", data);
        setFuncionarios(data);
      })
      .catch((err) => console.error("Erro ao buscar funcionários:", err));
  }, []);
  {
    /* Páginas */
  }
  const totalPaginas = Math.ceil(funcionarios.length / porPagina);

  const funcionariosPaginados = funcionarios.slice(
    (pagina - 1) * porPagina,
    pagina * porPagina
  );

  const fields = [
    { label: "Nome do Funcionário", width: "w-[390px]" },
    { label: "CPF", width: "w-[165px]", placeholder: "000.000.000-00" },
    { label: "PIS", width: "w-[165px]", placeholder: "000.00000.00-0" },
    { label: "Matrícula", width: "w-[165px]" },
    {
      label: "Data de Admissão",
      width: "w-[165px]",
      placeholder: "00/00/0000",
    },
  ];

  return (
    <div className="w-full h-full flex">
      <div className="flex-1">
        <div className="w-[1200px] min-h-[650px] bg-gray-50 shadow rounded-2xl flex flex-col">
          {/* div Inputs inicias */}
          <div className="flex gap">
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col">
                <h2 className="text-[#3379BC] ml-6 mt-7 font-semibold">
                  {field.label}
                </h2>
                <input
                  className={`bg-gray-50 ml-6 mt-2 border border-gray-300 rounded p-1 ${field.width} placeholder-gray-400`}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          {/* div Botoes inicias */}
          <div className="flex gap-0.5">
            <button
              className="bg-[#3379BC] w-[180px] h-[35px] ml-6 mt-3 shadow rounded
           text-white font-semibold text-[18px] flex items-center justify-center gap-2  hover:bg-[#24598a] cursor-pointer"
            >
              <MagnifyingGlassIcon className="h-6 w-6 stroke-2" />
              Pesquisar
            </button>
            <button
              onClick={() => navigate("/cadastro")}
              className="w-[180px] h-[35px] ml-7 mt-3 shadow rounded border 
          border-[#3379BC] text-[#3379BC] font-semibold text-[18px] 
          flex items-center justify-center gap-2 hover:bg-[#24598a] hover:text-white transition cursor-pointer"
            >
              <PlusIcon className="h-6 w-6" />
              Adicionar
            </button>
          </div>
          {/* Tabela */}
          <div className="flex-1 mt-6 mx-6 overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#EBEDEE] text-[#3379BC] font-semibold">
                  <th className="py-3 p-2 w-20 border-b border-gray-300">
                    Editar
                  </th>
                  <th className="py-3 p-2 w-[380px] border-b border-gray-300 border-l">
                    Nome
                  </th>
                  <th className="py-3 p-2 w-[150px] border-b border-gray-300 border-l">
                    CPF
                  </th>
                  <th className="py-3 p-2 w-[150px] border-b border-gray-300 border-l">
                    PIS
                  </th>
                  <th className="py-3 p-2 w-[130px] border-b border-gray-300 border-l">
                    Matrícula
                  </th>
                  <th className="py-3 p-2 w-[130px] border-b border-gray-300 border-l">
                    Admissão
                  </th>
                </tr>
              </thead>

              <tbody>
                {funcionariosPaginados.map((func) => (
                  <tr key={func.id} className="text-center font-semibold">
                    <td className="py-2.5 p-2 border-t border-gray-300 flex items-center justify-center">
                      <button
                        onClick={() => navigate(`/editar/${func.id}`)}
                        className="cursor-pointer"
                      >
                        <PencilSquareIcon className="h-7 w-7 text-[#3379BC] hover:text-[#24598a] transition" />
                      </button>
                    </td>

                    <td className="py-3 p-2 border-t border-gray-300 border-l">
                      {func.nome}
                    </td>
                    <td className="py-3 p-2 border-t border-gray-300 border-l">
                      {func.cpf}
                    </td>
                    <td className="py-3 p-2 border-t border-gray-300 border-l">
                      {func.pis}
                    </td>
                    <td className="py-3 p-2 border-t border-gray-300 border-l">
                      {func.matricula}
                    </td>
                    <td className="py-3 p-2 border-t border-gray-300 border-l">
                      {new Date(func.data_admissao).toLocaleDateString("pt-BR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Paginação */}
          <div className="flex items-center justify-center gap-6 mt-2 mb-4 select-none">
            <span
              className={`text-[#3379BC] text-2xl font-bold cursor-pointer hover:text-[#24598a] transition ${
                pagina === 1
                  ? "opacity-40 cursor-default hover:text-[#3379BC]"
                  : ""
              }`}
              onClick={() => pagina > 1 && setPagina(pagina - 1)}
            >
              &lt;
            </span>

            <span className="text-[#3379BC] font-bold text-xl">
              {pagina} / {totalPaginas}
            </span>

            <span
              className={`text-[#3379BC] text-2xl font-bold cursor-pointer hover:text-[#24598a] transition ${
                pagina === totalPaginas
                  ? "opacity-40 cursor-default hover:text-[#3379BC]"
                  : ""
              }`}
              onClick={() => pagina < totalPaginas && setPagina(pagina + 1)}
            >
              &gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableFuncionario;
