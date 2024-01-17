import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Routes, Route, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../config/firebase";

export const AuthSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  console.log(auth?.currentUser?.photoURL);

  const signUp = (e) => {
    e.preventDefault();
    // toast("Signup Clicked!");
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email Already in Use");
        }
      });
  };

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        sessionStorage.setItem("Name", response._tokenResponse.displayName);
        sessionStorage.setItem("picture", response._tokenResponse.photoUrl);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const logout = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white border rounded-md shadow-md">
        <div className="flex justify-center mb-5">
          <img
            src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/fjgmherhc7j4vwy0qags"
            className="w-34 h-24"
          />
        </div>

        <h1 className="text-2xl font-semibold text-center text-black">
          Create an account to continue
        </h1>
        <div className="flex justify-center mt-8">
          <button
            onClick={googleSignIn}
            className="flex gap-4 items-center justify-center px-3 py-2 border border-gray-300 hover:border-black rounded-lg"
          >
            <span>
              <FcGoogle size={25} />
            </span>
            Sign Up with Google
          </button>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-black">OR</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex items-center justify-center">
          <form className="flex flex-col  items-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer bg-transparent h-10 w-60 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-400 focus:ring-black focus:text-black focus:outline-none focus:border-rose-600"
                />
                <label
                  htmlFor="email"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-black peer-focus:text-sm transition-all"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="peer bg-transparent h-10 w-60 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-400 focus:ring-black focus:text-black focus:outline-none focus:border-rose-600"
                />
                <label
                  htmlFor="password"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-black peer-focus:text-sm transition-all"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="my-8">
              <button
                onClick={signUp}
                className="bg-black rounded-md px-3 py-2 text-white"
              >
                Submit
              </button>
              <p className="mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-blue-400 underline">
                  Log in
                </a>
              </p>
            </div>

            {/* <button onClick={logout}>Logout</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export const AuthLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        sessionStorage.setItem("Name", response._tokenResponse.displayName);
        sessionStorage.setItem("picture", response._tokenResponse.photoUrl);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = () => {
    // toast("Signup Clicked!");
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Please check the Password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Please check the Email");
        }
      });
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white border rounded-md shadow-md">
        <div className="flex justify-center mb-5">
          <img
            src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/fjgmherhc7j4vwy0qags"
            className="w-34 h-24"
          />
        </div>

        <h1 className="text-2xl font-semibold text-center text-black">
          Login to continue
        </h1>
        <div className="flex justify-center mt-8">
          <button
            onClick={googleSignIn}
            className="flex gap-4 items-center justify-center px-3 py-2 border border-gray-300 hover:border-black rounded-lg"
          >
            <span>
              <FcGoogle size={25} />
            </span>
            Continue with Google
          </button>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-black">OR</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex items-center justify-center">
          <form className="flex flex-col  items-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer bg-transparent h-10 w-60 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-400 focus:ring-black focus:text-black focus:outline-none focus:border-rose-600"
                />
                <label
                  htmlFor="email"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-black peer-focus:text-sm transition-all"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="peer bg-transparent h-10 w-60 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-400 focus:ring-black focus:text-black focus:outline-none focus:border-rose-600"
                />
                <label
                  htmlFor="password"
                  className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-black peer-focus:text-sm transition-all"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="my-8">
              <button
                onClick={login}
                className="bg-black rounded-md px-3 py-2 text-white"
              >
                Submit
              </button>
              <p className="mt-4">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-400 underline">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
