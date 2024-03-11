import MenuItem from "./widgets/MenuItem";
import MenuItemTitle from "./widgets/MenuItemTitle";
import MenuTitle from "./widgets/MenuTitle";

export default function () {
  return (
    <aside className="bg-slate-700 shadow-lg text-white h-screen w-2/12">
      {/* TITULO */}
      <MenuTitle title={"Facilita juridico"} />
      {/* TITULO */}

      {/* LISTA COM MENU LATERAL */}
      <ul className="flex flex-col gap-2 mt-4">
        <MenuItem route={"/user"} label={"Usarios"} />
        <MenuItem route={"/route"} label={"Calcular rota"} />
      </ul>
      {/* LISTA COM MENU LATERAL */}
    </aside>
  );
}
