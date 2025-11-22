import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";



function SideBar() {
  return (
    <div className="bg-[#3379BC] w-[120px] h-full fixed top-0 left-0 ">
      {/* Logo Dixi */}
      <img
        src="/LogoDixi.png"
        alt="Logo Dixi"
        className="w-[90px] mt-[21px] ml-3"
      />

      <div className="w-full h-px bg-white my-4 "></div>
      {/* funcionário */}
      <button className="text-white flex flex-col items-center justify-center font-semibold h-[100px] w-full hover:bg-[#2a66a3]">
        <UserIcon className=" h-9 stroke-2"></UserIcon>
        <span>Funcionário</span>
      </button>

      <div className="w-full h-px bg-white my-4 "></div>
      {/* Espelho ponto */}
      <button className="text-white flex flex-col items-center justify-center font-semibold h-[100px] w-full hover:bg-[#2a66a3]">
        <DocumentTextIcon className="h-8 w-8 text-white stroke-2" />
        <span>espelho</span> <span>ponto</span>
      </button>

      <div className="w-full h-px bg-white my-4 "></div>
      {/* importação AFD */}
      <button className="text-white flex flex-col items-center justify-center font-semibold h-[100px] w-full hover:bg-[#2a66a3]">
        <ArrowDownTrayIcon className="h-8 w-8 text-white stroke-2" />
        <span>Importação</span> <span>AFD</span>
      </button>
      <div className="w-full h-px bg-white my-4 "></div>
    </div>
    
  );
}

export default SideBar;
