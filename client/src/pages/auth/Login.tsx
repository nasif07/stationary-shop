import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser, TAuthUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { verifyToken } from "@/utils/verifyToken";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      if (!res.success) {
        toast.error(res.message || "Invalid credentials", { id: toastId });
        return;
      }

      const isVerified = verifyToken(res.token);
      const user = res.data as TAuthUser;
      if (isVerified) {
        dispatch(setUser({ user: user, token: res.token }));
      }

      toast.success("Logged in successfully", { id: toastId });
      navigate(user?.role === "admin" ? "/dashboard" : "/");
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong", {
        id: toastId,
      });
    }
  };

  const fillDemoUser = () => {
    setValue("email", "user@gmail.com");
    setValue("password", "useruser");
  };

  const fillDemoAdmin = () => {
    setValue("email", "admin1@gmail.com");
    setValue("password", "adminadmin");
  };

  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Welcome Back!
          </p>
          <p>
            Log in to access your account, explore our latest products, and
            enjoy exclusive offers.
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={fillDemoUser}
            type="button"
            className="px-4 py-2 border border-black rounded text-black font-semibold">
            Use Demo User
          </button>
          <button
            onClick={fillDemoAdmin}
            type="button"
            className="px-4 py-2 border border-black rounded text-black font-semibold">
            Use Demo Admin
          </button>
        </div>

        <div className="mt-6 max-w-lg mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                {...register("email")}
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-700 shadow-sm rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="font-medium">Password</label>
              <input
                {...register("password")}
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-700 shadow-sm rounded-lg"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-black hover:bg-gray-700 active:bg-gray-700 rounded-lg duration-150">
              Login
            </button>

            <p className="w-full mt-2 font-medium">
              Don't Have an Account?{" "}
              <span className="font-bold text-blue-600">
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
