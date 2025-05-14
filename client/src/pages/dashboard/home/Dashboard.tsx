import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { logoutUser, selectUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import DashboardSidebar from "@/shared/DashboardSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User } from "lucide-react";
import { useGetUserByIdQuery } from "@/redux/features/user/userApi";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const shouldFetch = user && !!user.id;

  const {
    data,
  } = useGetUserByIdQuery(user?.id ?? "", {
    skip: !shouldFetch,
  });

  const finalUser = user || data?.data;

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-14 lg:h-[60px] gap-4 border-b bg-muted/40 px-4 sm:px-6 py-3 sm:py-0">
          <div className="flex items-center w-full justify-between gap-4">
            <SidebarTrigger />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-10 w-10 cursor-pointer border-2 border-gray-300">
                  <AvatarImage
                    src={finalUser?.photo || "/placeholder.svg"}
                    alt={finalUser?.name}
                  />
                  <AvatarFallback className="font-semibold text-base uppercase">
                    {finalUser?.name
                      ?.split(" ")
                      .map((n: string) => n[0])
                      .join("") || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[150px]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => navigate("/dashboard/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Profile Dropdown */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <Outlet></Outlet>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
