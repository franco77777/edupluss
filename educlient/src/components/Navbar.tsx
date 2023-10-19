import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useLocation } from "react-router-dom";
import { resetActivities } from "../redux/features/activitiesSlice";
import { Avatar } from "primereact/avatar";
import { InputSwitch } from "primereact/inputswitch";

import { Menu } from "primereact/menu";

function NavBar() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const currentEmpresa = useSelector(
    (state: RootState) => state.activities.selectEmpresa.name
  );
  const menu = useRef<Menu>(null);

  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> | undefined = (
    event
  ) => {
    menu.current?.toggle(event);
  };

  const logOut = () => {
    dispatch(resetActivities());
    window.localStorage.removeItem("token");
    window.location.replace("/");
  };

  const overlayMenuItems = [
    {
      label: "Cerrar Sesión",
      icon: "pi pi-sign-out",
      command: logOut,
    },
  ];

  return (
    <>
      <nav className=" py-3 layout-topbar bg-blue-500 flex relative justify-center items-center z-2">
        {/* <Button
          className="ml-1 py-5 px-4 rounded-lg h-[2rem] w-[5rem] z-10 shadow-xl"
          severity="info"
          style={{ position: "fixed" }}
        >
          <i className="pi pi-bars" style={{ fontSize: "2rem" }}></i>
        </Button> */}

        <h2 className="text-white font-bold m-0">
          {currentEmpresa ? currentEmpresa : "Selecciona la empresa"}
        </h2>
        <div className="flex">
          <InputSwitch checked />
        </div>
        {pathname !== "/" && pathname !== "/login" ? (
          <Avatar
            icon="pi pi-user"
            size="large"
            shape="circle"
            onClick={toggleMenu}
            className="absolute right-2"
          ></Avatar>
        ) : (
          ""
        )}

        <Menu ref={menu} model={overlayMenuItems} popup />
      </nav>
    </>
  );
}

export default NavBar;
