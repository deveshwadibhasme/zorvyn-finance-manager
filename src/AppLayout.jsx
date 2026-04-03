import React from "react";
import NavBar from "./layouts/NavBar";
import SideBar from "./layouts/SideBar";
import { RoleProvider } from "./context/RoleContext.jsx";
import { Outlet } from "react-router-dom";
import { TransactionProvider } from "./context/TransactionContext.jsx";

const AppLayout = () => {
  return (
    <TransactionProvider>
      <RoleProvider>
        <main className="h-screen flex flex-col">
          <div className="flex flex-1 overflow-hidden">
            <SideBar />
            <section className="flex-1 overflow-y-auto bg-gray-300">
              <NavBar />
              <Outlet />
            </section>
          </div>
        </main>
      </RoleProvider>
    </TransactionProvider>
  );
};

export default AppLayout;
