import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import TableFuncionario from "./components/TableFuncionario";
import CadastroFuncionario from "./components/CadastroFuncionario";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex">
        {/* Sidebar */}
        <SideBar />

        <div className="flex flex-col w-full mt-10 ml-[400px]">
          <Routes>
            {/* Tela Funcionários */}
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-[#3379BC] text-4xl font-bold mb-4">
                    Funcionários
                  </h1>
                  <TableFuncionario />
                </>
              }
            />

            {/* Tela Cadastro de Funcionário */}
            <Route
              path="/cadastro"
              element={
                <>
                  <h1 className="text-[#3379BC] text-4xl font-bold mb-4">
                    Cadastro de Funcionário
                  </h1>
                  <CadastroFuncionario />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
