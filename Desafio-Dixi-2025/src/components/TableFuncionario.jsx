import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function TableFuncionario() {
  const navigate = useNavigate();
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
      <div className="w-[1200px] h-[650px] bg-gray-50 shadow rounded-2xl">
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
           text-white font-semibold text-[18px] flex items-center justify-center gap-2  hover:bg-[#24598a]"
          >
            <MagnifyingGlassIcon className="h-6 w-6 stroke-2" />
            Pesquisar
          </button>
          <button
            onClick={() => navigate("/cadastro")}
            className="w-[180px] h-[35px] ml-7 mt-3 shadow rounded border 
          border-[#3379BC] text-[#3379BC] font-semibold text-[18px] 
          flex items-center justify-center gap-2 hover:bg-[#24598a] hover:text-white transition"
          >
            <PlusIcon className="h-6 w-6" />
            Adicionar
          </button>
        </div>
        {/* Tabela */}
        <div className="mt-6 mx-6">
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
              {Array.from({ length: 8 }).map((_, index) => (
                <tr key={index} className="text-center font-semibold">
                  <td className="py-2.5 p-2 border-t border-gray-300 flex items-center justify-center">
                    <PencilSquareIcon className=" h-7 w-7 text-[#3379BC] cursor-pointer hover:text-[#24598a] transition" />
                  </td>
                  <td className="py-3 p-2 border-t border-gray-300 border-l">
                    Funcionário {index + 1}
                  </td>
                  <td className="py-3 p-2 border-t border-gray-300 border-l">
                    000.000.000-00
                  </td>
                  <td className="py-3 p-2 border-t border-gray-300 border-l">
                    00000000000
                  </td>
                  <td className="py-3 p-2 border-t border-gray-300 border-l">
                    12345
                  </td>
                  <td className="py-3 p-2 border-t border-gray-300 border-l">
                    01/01/2025
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Paginação */}
        <div className="flex items-center justify-center gap-6 mt-1 select-none">
          {/* Botão anterior */}
          <span
            className="text-[#3379BC] text-2xl font-bold cursor-pointer hover:text-[#24598a] transition mb-3"
            onClick={() => console.log("Página anterior")}
          >
            &lt;
          </span>

          {/* Número da página */}
          <span className="text-[#3379BC] font-bold text-2x1 mb-2">1</span>

          {/* Botão próximo */}
          <span
            className="text-[#3379BC] text-2xl font-bold cursor-pointer hover:text-[#24598a] mb-3"
            onClick={() => console.log("Próxima página")}
          >
            &gt;
          </span>
        </div>
      </div>
    </div>
  );
}

export default TableFuncionario;
