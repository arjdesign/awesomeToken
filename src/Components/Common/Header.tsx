import * as React from "react";
import { Link } from "react-router-dom";

export interface IHeaderProps {
  isLogged: boolean;
  isAdmin: boolean;
  languages: any;
}

export default function Header(props: IHeaderProps) {
  return <div>THis is header section</div>;
}
