import { useAppSelector } from "@/redux/hooks";
import DashboardAdminHome from "./DashboardAdminHome";
import DashboardUserHome from "./DashboardUserHome";

const DashboardHome = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user?.role === "admin") {
    return <DashboardAdminHome />;
  }

  return <DashboardUserHome />;
};

export default DashboardHome;
