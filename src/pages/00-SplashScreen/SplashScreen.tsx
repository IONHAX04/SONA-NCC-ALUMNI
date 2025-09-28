import { IonContent, IonImg, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import splashScreenImage from "../../assets/logo/logo.jpg";

const SplashScreen: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.replace("/getStarted");
    }, 1500);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex flex-col h-screen items-center justify-center">
          <IonImg src={splashScreenImage} className="mx-20 mb-10" />
          <p className="text-3xl font-bold uppercase">Sona NCC</p>
          <p className="italic py-3">"Unity & Discipline"</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
