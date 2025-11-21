import SideBar from "./components/SideBar";
import TableFuncionario from "./components/TableFuncionario";

function App() {
  return (
    <div className="min-h-screen bg-white flex">
      <SideBar />
      <div className="flex flex-col w-full mt-10 ml-[400px]">
        <h1 className="text-[#3379BC] text-4xl font-bold mb-4">Funcionários</h1>

        <TableFuncionario />
      </div>
    </div>
  );
}

export default App;
