import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import Logo from "../../assets/images/logo.png";
import AdminAvatar from "../../assets/images/avatar/5.png";
import UserAvatar from "../../assets/images/avatar/1.png";

export interface IHeaderProps {
  isLogged: boolean;
  isAdmin: boolean;
}
const stylePrefix = "aw-header";
export default function Header(props: IHeaderProps) {
  const { isLogged, isAdmin } = props;

  return (
    <header className={stylePrefix}>
      {isLogged ? (
        isAdmin ? (
          <div className={`${stylePrefix}-container`}>
            <img src={Logo} alt="Wall Of Awesome" />
            <h1 className={`${stylePrefix}-container--title`}>
              #WallOfAwesome
            </h1>
            <div>
              <Link to="/admin/profile">
                <img
                  src={AdminAvatar}
                  alt="Wall Of Awesome"
                  className=" avatar-sm"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className={`${stylePrefix}-container`}>
            <img src={Logo} alt="Wall Of Awesome" />
            <h1 className={`${stylePrefix}-container--title`}>
              #WallOfAwesome
            </h1>
            <div>
              <Link to="/user-profile">
                <img src={UserAvatar} alt="Wall Of Awesome" />
              </Link>
            </div>
          </div>
        )
      ) : (
        <h1>Header</h1>
      )}
    </header>
  );
}
