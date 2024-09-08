import { Button } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/AuthSlice";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [login, { error }] = useLoginMutation();

  //   console.log("data=>", data);
  console.log("error=>", error);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    console.log(res.token);
    const user = verifyToken(res.token);

    dispatch(setUser({ user: user, token: res.token }));
  };

  // console.log(watch("email")); // watch input value by passing the name of it
  return (
    <section className="lg:mt-16 lg:w-[450px] md:w-1/2 mx-auto lg:border lg:rounded-xl lg:shadow-md bg-gradient">
      <div className="bg-white lg:m-1 lg:rounded-lg px-4 py-5 mx-auto">
        <h4 className=" text-2xl font-semibold">Login</h4>
        <p>Enter your email below to login to your account</p>

        <form onSubmit={handleSubmit(onSubmit)} className=" ">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="m@example.com"
              />
              {errors.email && (
                <span className="text-sm text-red-500 flex items-center">
                  Email is required
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <label htmlFor="password">Password</label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="•••••••••"
              />
              {errors.password && (
                <span className="text-sm text-red-500 flex items-center">
                  Password is required
                </span>
              )}
            </div>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm flex items-center justify-center">
          <div>
            Don&apos;t have an account?{" "}
            <Link to="/signUp" className="ml-2 underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
