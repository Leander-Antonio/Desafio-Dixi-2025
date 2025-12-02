import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Espelho() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex gap-6 w-full items-end">
        {/* CAMPO 1 */}
        <div className="flex flex-col w-[150px]">
          <label className={"text-[#3379BC] font-semibold "}>
            Data Inicial <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="bg-white border border-gray-300 rounded p-1.5 w-full placeholder-gray-400 placeholder:font-semibold"
            placeholder={"00/00/0000"}
          />
        </div>

        {/* CAMPO 2 */}
        <div className="flex flex-col w-[150px]">
          <label className="text-[#3379BC] font-semibold">
            Data Final <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="bg-white border border-gray-300 rounded p-1.5 w-full placeholder-gray-400 placeholder:font-semibold"
            placeholder={"00/00/0000"}
          />
        </div>

        {/* Botões */}
        <div className="flex mb-0.45">
          <button
            className="bg-[#3379BC] w-[180px] h-9 ml-3 shadow rounded
             text-white font-semibold text-[18px] flex items-center justify-center gap-2 hover:bg-[#24598a] cursor-pointer"
          >
            <MagnifyingGlassIcon className="h-6 w-6 stroke-2" />
            Pesquisar
          </button>

          <button
            className="w-[180px] h-9 ml-7 shadow rounded border 
            border-[#3379BC] text-[#3379BC] font-semibold text-[18px] 
            flex items-center justify-center gap-2 hover:bg-[#24598a] hover:text-white transition cursor-pointer"
          >
            <PlusIcon className="h-6 w-6" />
            Calcular
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="flex-2 mt-6 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#EBEDEE] text-[#3379BC] font-semibold text-[1.18rem]">
              <th className="py-1 p-2 w-20 border-b border-red">
                <button className=""></button>
              </th>
              <th className="py-1.5 p-2 w-[200px] border-b border-gray-300 border-l">
                Data
              </th>
              <th className="py-1.5 p-2 w-[680px] border-b border-gray-300 border-l">
                Marcações
              </th>
              <th className="py-1.5 p-2 w-[180px] border-b border-gray-300 border-l">
                Horas Trabalhadas
              </th>
              <th className="py-1.5 p-2 w-[180px] border-b border-gray-300 border-l">
                Horas Extras
              </th>
              <th className="py-1.5 p-2 w-[180px] border-b border-gray-300 border-l">
                Faltas
              </th>
              <th className="py-1.5 p-2 w-[180px] border-b border-gray-300 border-l">
                Atrasos
              </th>
              <th className="py-1.5 p-2 w-[180px] border-b border-gray-300 border-l">
                Adicional Noturno
              </th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Espelho;
