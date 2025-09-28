import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import logoImgBatch from "../../assets/logo/logo.jpg";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SONA NCC</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex flex-col h-[100%] pt-10 pb-10 items-center justify-center px-6 overflow-auto">
          {/* Title */}
          <div className="mb-3 text-center">
            <p className="font-bold text-2xl">Welcome to Sona NCC</p>
            <p className="text-gray-500 text-sm mt-1">
              Join our community of cadets, alumni and officers
            </p>
          </div>

          <img src={logoImgBatch} className="w-[30%] pb-3" alt="" />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            style={{ marginBottom: "15px" }}
            className="mb-4 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            style={{ marginBottom: "20px" }}
            className="mb-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-300"
          />

          {/* Forgot Password */}
          <div className="w-full text-right mb-6">
            <button className="text-sm text-[#1173d4] hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={() => history.push("/home")}
            className="w-full bg-[#1173d4] rounded-lg text-white uppercase font-bold"
            style={{
              padding: "15px",
              borderRadius: "7px",
              textTransform: "uppercase",
            }}
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex w-full items-center my-6">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500 uppercase">or</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Continue with Google
          </button>

          {/* Sign Up */}
          <p className="mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <button className="text-[#1173d4] font-semibold underline">
              Sign up
            </button>
          </p>
        </div>
      </IonContent>

      <IonFooter className="">
        <IonToolbar>
          <IonTitle>© {new Date().getFullYear()} Sona NCC</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
