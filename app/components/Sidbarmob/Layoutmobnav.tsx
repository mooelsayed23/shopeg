"use client";
import React from "react";
import SidebarNav from "./SidebarNav";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/app/datastore/store";

const Layoutmobnav = () => {
  const show = useSelector((state: RootState) => state.showAside.value);
  return (
    <>
      {show.mobsidebar && <Sidebar />}
      {show.mobNav && <SidebarNav />}
    </>
  );
};

export default Layoutmobnav;
