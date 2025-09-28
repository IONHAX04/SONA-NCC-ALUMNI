import { IonContent, IonImg, IonPage } from "@ionic/react";
import React from "react";

import splashScreenImage from "../../assets/logo/logo.jpg";

const SplashScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg src={splashScreenImage} />
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
