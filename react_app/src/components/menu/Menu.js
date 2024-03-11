import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function () {
  return (
    <Sidebar className="h-screen shadow-xl">
      <Menu>
        <MenuItem className="text-xl text-center p-2 mb-4">
          Facilita juridico
        </MenuItem>
        <SubMenu label="Usuarios">
          <MenuItem component={<Link to={"/create-user"} />}> Criar</MenuItem>
          <MenuItem component={<Link to={"/list-user"} />}>Listar</MenuItem>
        </SubMenu>
        <MenuItem component={<Link to={"/route"} />}>Calcular Rota</MenuItem>
      </Menu>
    </Sidebar>
  );
}
