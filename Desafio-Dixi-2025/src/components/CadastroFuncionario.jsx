function CadastroFuncionario() {
  return (
    <div className="w-full h-full flex">
      <div className="w-[1200px] h-[650px] bg-gray-50 shadow rounded-2xl p-6 flex flex-col justify-center items-center">
        {/* Input nome do func */}
        <div className=" flex flex-col w-[400px]">
          <label htmlFor="nome" className="text-[#3379BC] font-semibold">
            Nome do Funcionário<span className="text-red-500">*</span>
          </label>
          <input
            id="nome"
            type="text"
            className="bg-white border border-gray-300 rounded p-2 mt-2 w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default CadastroFuncionario;
