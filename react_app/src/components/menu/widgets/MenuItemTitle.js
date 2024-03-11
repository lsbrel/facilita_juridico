import MenuItem from "./MenuItem";

export default function ({ label }) {
  return (
    <>
      <h4 className="text-lg text-xl capitalize p-2">{label}</h4>
      <ul className="flex flex-col gap-1">
        <MenuItem route={"/listar"} label={"Ver usuarios"} />
        <MenuItem route={"/user"} label={"Criar usuarios"} />
      </ul>
    </>
  );
}
