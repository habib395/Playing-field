import { useContext, useState } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { FaGoogle, FaRegEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

import { saveUser } from "../utils/api";

const Register = () => {
  const { handleRegister, manageProfile, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    // ✅ Password validation before Firebase call
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }

    try {
      const result = await handleRegister(email, password);
      await manageProfile(name, image);
      await saveUser({ name, email, image });
      toast.success("Registration successful!");
      navigate(location.state?.from || "/");
    } catch (err) {
      setError(err.message);
      toast.error(`Registration failed: ${err.message}`);
    }
  };

const handleGoogleLogin = async () => {
  try {
    const data = await signInWithGoogle();
    await saveUser({
      name: data?.user?.displayName,
      email: data?.user?.email,
      image: data?.user?.photoURL,
    });
    navigate(location.state?.from || "/");
    toast.success(`Welcome ${data?.user?.displayName}! Successfully logged in.`);
  } catch (err) {
    const message = err?.message || "Something went wrong during Google login.";
    toast.error(`Google Login Failed: ${message}`);
  }
};


  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="card-body bg-base-300 w-11/12 mx-auto min-h-screen md:w-1/2 rounded-lg my-10"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            name="image"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered"
            name="password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-sm absolute right-2 top-11"
          >
            {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
          </button>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn w-full bg-green-500">
            Register
          </button>
        </div>
        <button
          type="button"
          className="btn btn-active mt-4"
          onClick={handleGoogleLogin}
        >
          <FaGoogle /> Continue With Google
        </button>
        <p className="mt-4">
          Already Registered?{" "}
          <NavLink className="text-green-500" to="/login">
            Login
          </NavLink>
        </p>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <ToastContainer />
    </>
  );
};

export default Register;
