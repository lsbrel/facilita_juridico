import { Outlet } from "react-router";
import Menu from "../components/menu/Menu";

export default function () {
  return (
    <>
      <main className="flex flex-row">
        <Menu />
        <Outlet />
      </main>
    </>
  );
}
