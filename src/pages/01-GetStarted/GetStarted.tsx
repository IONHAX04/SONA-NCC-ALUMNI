import { IonContent, IonFooter, IonHeader, IonPage } from "@ionic/react";
import React from "react";

import introImg from "../../assets/getstarted/img.jpg";

const GetStarted: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <div className="flex flex-col min-h-screen">
          {/* Image */}
          <div className="flex-shrink-0">
            <img src={introImg} alt="Intro" className="w-full object-cover" />
          </div>

          {/* Text + Button Section */}
          <div className="flex flex-col flex-1 p-4 justify-evenly">
            <div className="text-center">
              <p className="font-bold text-2xl uppercase">
                Unity and Discipline
              </p>
              <p className="text-sm mt-2">
                Stay connected with your unit, manage events, and access
                valuable resources right at your fingertips
              </p>
            </div>

            <div className="gap-4">
              <button
                className="w-full bg-[#1173d4] rounded-lg text-white uppercase font-bold"
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  textTransform: "uppercase",
                }}
              >
                Get Started
              </button>
              <p className="text-sm text-center mt-5">
                By continuing, you agree to our{" "}
                <span className="underline">Terms of Service</span> and{" "}
                <span className="underline">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </IonContent>
      <IonFooter></IonFooter>
    </IonPage>
  );
};

export default GetStarted;
