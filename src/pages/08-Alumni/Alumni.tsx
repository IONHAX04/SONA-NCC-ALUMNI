import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import React from "react";

const Alumni: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" mode="md" />
          </IonButtons>
          <IonTitle>Alumni</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="flex items-center justify-between m-3 shadow-md border-[#c6c6c6] border rounded-lg p-3">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0054e9] text-white font-bold">
              <p>19</p>
            </div>
            <div className="flex flex-col">
              <p>Batch: 2019 - 2022</p>
              <p>Members: 12</p>
            </div>
          </div>
          <div>
            <IonIcon icon={chevronForwardOutline} />
          </div>
        </div>

        <div className="flex items-center justify-between m-3 shadow-md border-[#c6c6c6] border rounded-lg p-3">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0054e9] text-white font-bold">
              <p>20</p>
            </div>
            <div className="flex flex-col">
              <p>Batch: 2020 - 2023</p>
              <p>Members: 10</p>
            </div>
          </div>
          <div>
            <IonIcon icon={chevronForwardOutline} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Alumni;
