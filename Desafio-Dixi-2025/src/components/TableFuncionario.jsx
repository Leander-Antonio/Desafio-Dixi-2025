import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";

function TableFuncionario() {
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
            className="w-[180px] h-[35px] ml-7 mt-3 shadow rounded border 
          border-[#3379BC] text-[#3379BC] font-semibold text-[18px] 
          flex items-center justify-center gap-2 hover:bg-[#24598a] hover:text-white transition"
          >
            <PlusIcon className="h-6 w-6" />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableFuncionario;
