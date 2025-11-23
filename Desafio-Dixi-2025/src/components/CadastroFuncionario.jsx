import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

function CadastroFuncionario() {
  const navigate = useNavigate();
  const [ativo, setAtivo] = useState(true);
  return (
    <div className="w-full h-full flex">
      <div className="w-[1200px] h-[650px] bg-gray-50 shadow rounded-2xl p-6 flex flex-col justify-center items-center">
        {/* Input nome do func */}
        <div className="flex flex-col w-[400px]">
          <label htmlFor="nome" className="text-[#3379BC] font-semibold">
            Nome do Funcionário<span className="text-red-500">*</span>
          </label>
          <input
            id="nome"
            type="text"
            className="bg-white border border-gray-300 rounded p-2 w-[400px]"
          />
        </div>

        {/* Inputs da CPF e PIS*/}
        <div className="flex items-end gap-8 mt-4">
          {/* Input do CPF */}
          <div className="flex flex-col">
            <label htmlFor="cpf" className="text-[#3379BC] font-semibold">
              CPF
            </label>
            <input
              id="cpf"
              type="text"
              className="bg-white border border-gray-300 rounded p-2 w-40 placeholder-gray-400"
              placeholder="000.000.000-00"
            />
          </div>
          <span className="text-gray-400 pb-3">ou</span>
          {/* Input do PIS */}
          <div className="flex flex-col">
            <label htmlFor="pis" className="text-[#3379BC] font-semibold">
              PIS
            </label>
            <input
              id="pis"
              type="text"
              className="bg-white border border-gray-300 rounded p-2 w-40 placeholder-gray-400"
              placeholder="000.00000.00-0"
            />
          </div>
        </div>

        {/* Inputs da matrícula e data */}
        <div className="flex items-start gap-8 mt-4 w-full justify-center">
          {/* Coluna ESQUERDA */}
          <div className="flex flex-col">
            <label htmlFor="matricula" className="text-[#3379BC] font-semibold">
              Matrícula<span className="text-red-500">*</span>
            </label>
            <input
              id="matricula"
              type="text"
              className="bg-white border border-gray-300 rounded p-2 w-40"
            />

            {/* Situação Cadastro*/}
            <div className="flex flex-col gap-2 mt-6 items-start">
              <span className="text-gray-500 font-semibold">
                Situação Cadastro
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setAtivo(!ativo)}
                  aria-pressed={ativo}
                  aria-label="Alternar situação cadastro"
                  className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                    ativo ? "bg-[#3379BC]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      ativo ? "translate-x-8" : "translate-x-0"
                    }`}
                  />
                </button>

                <span
                  className={`font-semibold ${
                    ativo ? "text-[#3379BC]" : "text-gray-400"
                  }`}
                >
                  {ativo ? "ATIVO" : "INATIVO"}
                </span>
              </div>
            </div>
          </div>

          {/* Coluna DIREITA */}
          <div className="flex flex-col ml-13">
            <label htmlFor="data" className="text-[#3379BC] font-semibold">
              Data de Adimissão<span className="text-red-500">*</span>
            </label>
            <input
              id="data"
              type="text"
              className="bg-white border border-gray-300 rounded p-2 w-40 placeholder-gray-400"
              placeholder="00/00/0000"
            />

            {/* Textos */}
            <div className="flex flex-col mt-7">
              <span className="text-gray-400">
                Campos obrigatórios
                <span className="text-red-500 font-semibold">*</span>
              </span>
              <span className="text-gray-400">Preencha CPF ou PIS</span>
            </div>
          </div>
        </div>

        {/* Linha dos botões*/}
        <div className="w-full flex justify-center mt-8">
          <div className="w-[480px] flex justify-center gap-7">
            <button
              onClick={() => navigate("/")}
              className="w-[190px] h-10 shadow rounded border border-[#3379BC] text-[#3379BC] 
              font-semibold text-[18px] flex items-center justify-center hover:bg-[#24598a] hover:text-white transition cursor- gap-3"
            >
              <XMarkIcon className="w-6 h-6 stroke-2" />
              Cancelar
            </button>

            <button
              className="bg-[#3379BC] w-[190px] h-10 shadow rounded text-white 
            font-semibold text-[18px] flex items-center justify-center hover:bg-[#24598a] cursor-pointer gap-3"
            >
              <CheckIcon className="w-5 h-5 stroke-4" />
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroFuncionario;
