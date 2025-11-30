import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

function EditarFuncionario() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Estados
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [pis, setPis] = useState("");
  const [matricula, setMatricula] = useState("");
  const [data, setData] = useState("");
  const [ativo, setAtivo] = useState(true);

  // Busca os dados do funcionario
  useEffect(() => {
    const fetchFuncionario = async () => {
      try {
        const resposta = await fetch(
          `http://localhost:3001/funcionarios/${id}`
        );
        const data = await resposta.json();

        if (data.error) {
          alert("Funcionário não encontrado!");
          navigate("/");
          return;
        }

        // Preenche os campos com os dados do backend
        setNome(data.nome);
        setCpf(data.cpf);
        setPis(data.pis);
        setMatricula(data.matricula);
        setData(data.data_admissao?.substring(0, 10)); // formatar yyyy-mm-dd
        setAtivo(data.ativo === 1);
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar dados do funcionário!");
      }
    };

    fetchFuncionario();
  }, [id, navigate]);

  // Enviar alteração para o back
  const editarFuncionario = async () => {
    const funcionarioAtualizado = {
      nome,
      cpf,
      pis,
      matricula,
      data_admissao: data,
      ativo: ativo ? 1 : 0,
    };

    try {
      const resposta = await fetch(`http://localhost:3001/funcionarios/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(funcionarioAtualizado),
      });

      const result = await resposta.json();
      alert(result.message);
      navigate("/");
    } catch (error) {
      alert("Erro ao atualizar funcionário!");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-[1200px] h-[650px] bg-gray-50 shadow rounded-2xl p-6 flex flex-col justify-center items-center">
        {/* Input nome */}
        <div className="flex flex-col w-[400px]">
          <label className="text-[#3379BC] font-semibold">
            Nome do Funcionário<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="bg-white border border-gray-300 rounded p-2 w-[400px]"
          />
        </div>

        {/* CPF e PIS */}
        <div className="flex items-end gap-8 mt-4">
          <div className="flex flex-col">
            <label className="text-[#3379BC] font-semibold">CPF</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="bg-white border border-gray-300 rounded p-2 w-40"
            />
          </div>

          <span className="text-gray-400 pb-3">ou</span>

          <div className="flex flex-col">
            <label className="text-[#3379BC] font-semibold">PIS</label>
            <input
              type="text"
              value={pis}
              onChange={(e) => setPis(e.target.value)}
              className="bg-white border border-gray-300 rounded p-2 w-40"
            />
          </div>
        </div>

        {/* Matrícula + Situação + Data */}
        <div className="flex items-start gap-21 mt-4 justify-center">
          <div className="flex flex-col">
            <label className="text-[#3379BC] font-semibold">
              Matrícula<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              className="bg-white border border-gray-300 rounded p-2 w-40"
            />

            {/* Situação */}
            <div className="flex flex-col gap-2 mt-6 items-start">
              <span className="text-gray-500 font-semibold">
                Situação Cadastro
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setAtivo(!ativo)}
                  className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors ${
                    ativo ? "bg-[#3379BC]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
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

          {/* Data */}
          <div className="flex flex-col">
            <label className="text-[#3379BC] font-semibold">
              Data de Admissão<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="bg-white border border-gray-300 rounded p-2 w-40"
            />

            <div className="flex flex-col mt-7">
              <span className="text-gray-400">
                Campos obrigatórios<span className="text-red-500">*</span>
              </span>
              <span className="text-gray-400">Preencha CPF ou PIS</span>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="w-full flex justify-center mt-8">
          <div className="w-[480px] flex justify-center gap-7">
            <button
              onClick={() => navigate("/")}
              className="w-[190px] h-10 shadow rounded border border-[#3379BC] text-[#3379BC] font-semibold hover:bg-[#24598a] hover:text-white transition flex items-center justify-center gap-3"
            >
              <XMarkIcon className="w-6 h-6 stroke-3" />
              Cancelar
            </button>

            <button
              onClick={editarFuncionario}
              className="bg-[#3379BC] w-[190px] h-10 shadow rounded text-white font-semibold hover:bg-[#24598a] flex items-center justify-center gap-3"
            >
              <CheckIcon className="w-5 h-5 stroke-3" />
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarFuncionario;
