import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import TableFuncionario from "./components/TableFuncionario";
import CadastroFuncionario from "./components/CadastroFuncionario";
import EditarFuncionario from "./components/EditarFuncionario";
import Espelho from "./components/Espelho";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex">
        {/* Sidebar */}
        <SideBar />

        <div className="ml-[120px] mt-10">
          <Routes>
            {/* Tela Funcionários */}
            <Route
              path="/"
              element={
                <div className="ml-[280px]">
                  <h1 className="text-[#3379BC] text-4xl font-bold mb-4">
                    Funcionários
                  </h1>
                  <TableFuncionario />
                </div>
              }
            />

            {/* Tela Cadastro de Funcionário */}
            <Route
              path="/cadastro"
              element={
                <div className="ml-[280px]">
                  <h1 className="text-[#3379BC] text-4xl font-bold mb-4">
                    Cadastro de Funcionário
                  </h1>
                  <CadastroFuncionario />
                </div>
              }
            />

            {/* Tela Edição */}
            <Route
              path="/editar/:id"
              element={
                <div className="ml-[280px]">
                  <h1 className="text-[#3379BC] text-4xl font-bold mb-4">
                    Editar Funcionário
                  </h1>
                  <EditarFuncionario />
                </div>
              }
            />
            <Route
              path="/espelho"
              element={
                <div className="ml-10">
                  <h1 className="text-[#3379BC] text-4xl font-bold mb-4">
                    Espelho Ponto
                  </h1>
                  <h2 className="text-gray-400 font-semibold mb-4 text-[1.30rem]">
                    Selecione o período para consulta do Espelho Ponto.
                  </h2>
                  <Espelho />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
