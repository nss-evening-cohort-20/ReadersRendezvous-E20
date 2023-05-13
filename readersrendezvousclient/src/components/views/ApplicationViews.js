import { AdminViews } from "./AdminViews";
import { UserViews } from "./UserViews";

export const ApplicationViews = () => {
  const appUser = localStorage.getItem("app_user");
  const appUserObject = JSON.parse(appUser);

  if (appUserObject.isAdmin) {
    return <AdminViews />;
  } else {
    return <UserViews />;
  }
};
