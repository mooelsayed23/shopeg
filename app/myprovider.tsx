"use client";
import {store}  from './datastore/store'; 
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
interface Props {
  children: ReactNode;
}
const Myprovider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Myprovider;