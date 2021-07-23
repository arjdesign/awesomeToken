import * as React from "react";
import { NavLink } from "react-router-dom";
import "./VerticalMenu.scss";
export interface IVerticalMenuProps {
  isAdmin: boolean;
}
const stylePrefix = "aw-vertical-menu";

export default function VerticalMenu(props: IVerticalMenuProps) {
  const { isAdmin } = props;
  return (
    <div className={`${stylePrefix}`}>
      <div className={`${stylePrefix}--wrapper`}>
        <div className={`${stylePrefix}--top`}>
          <ul className={`${stylePrefix}--menus`}>
            {isAdmin ? (
              <>
                <li className={`${stylePrefix}--menus-item`}>
                  <NavLink
                    className={`${stylePrefix}--menus-item-link`}
                    activeClassName="active"
                    to="/admin/dashboard"
                  >
                    <i className="fas fa-th-large" />
                    Dashboard
                  </NavLink>
                </li>
                <li className={`${stylePrefix}--menus-item`}>
                  <NavLink
                    className={`${stylePrefix}--menus-item-link`}
                    activeClassName="active"
                    to="/admin/users"
                  >
                    <i className="fas fa-th-large" />
                    Users
                  </NavLink>
                </li>
              </>
            ) : (
              <li className={`${stylePrefix}--menus-item`}>
                <NavLink
                  className={`${stylePrefix}--menus-item-link`}
                  activeClassName="active"
                  to="/wall-of-awesome"
                >
                  <i className="fas fa-th-large" />
                  #Wall of awesome
                </NavLink>
              </li>
            )}

            <li className={`${stylePrefix}--menus-item`}>
              <NavLink
                className={`${stylePrefix}--menus-item-link`}
                activeClassName="active"
                to="/analytics"
              >
                <i className="fas fa-chart-pie" />
                Analytics
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={`${stylePrefix}--bottom`}>
          <ul className={`${stylePrefix}--menus`}>
            {isAdmin ? (
              <li className={`${stylePrefix}--menus-item`}>
                <NavLink
                  className={`${stylePrefix}--menus-item-link`}
                  activeClassName="active"
                  to="/admin/admin-settings"
                >
                  <i className="fas fa-cog" />
                  Settings
                </NavLink>
              </li>
            ) : (
              <li className={`${stylePrefix}--menus-item`}>
                <NavLink
                  className={`${stylePrefix}--menus-item-link`}
                  activeClassName="active"
                  to="/setting"
                >
                  <i className="fas fa-cog" />
                  Settings
                </NavLink>
              </li>
            )}
            <li className={`${stylePrefix}--menus-item`}>
              <NavLink
                className={`${stylePrefix}--menus-item-link`}
                activeClassName="active"
                to="/login"
              >
                <i className="fas fa-power-off" />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
