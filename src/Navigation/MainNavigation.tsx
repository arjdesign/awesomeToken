import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "../Pages/Auth/Login/Login";
import Dashboard from "../Pages/AdminSection/Dashboard";
import Users from "../Pages/AdminSection/User/Users";
import CreateUser from "../Pages/AdminSection/User/CreateUser";
import Analytics from "../Pages/UserSection/Analytics";
import UserProfile from "../Pages/UserSection/UserProfile";
import UserSettings from "../Pages/UserSection/UserSettings";
import LogOut from "../Pages/UserSection/LogOut";
import AdminProfile from "../Pages/AdminSection/Profile";
import AdminSettings from "../Pages/AdminSection/Settings";
import WallOfAwesome from "../Pages/WallOfAwesome/WallOfAwesome";

const MainNavigation = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={LogOut} />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/profile" component={AdminProfile} />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/create-user" component={CreateUser} />
        <Route path="/admin/admin-settings" component={AdminSettings} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/user-profile" component={UserProfile} />
        <Route exact path="/wall-of-awesome" component={WallOfAwesome} />
        <Route path="/settings" component={UserSettings} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default MainNavigation;
