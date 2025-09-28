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
import { useHistory } from "react-router-dom";

const alumniData = {
  alumniBatches: [
    {
      batchId: "19",
      batchPeriod: "2019 - 2022",
      membersCount: 12,
    },
    {
      batchId: "20",
      batchPeriod: "2020 - 2023",
      membersCount: 10,
    },
  ],
};

const Alumni: React.FC = () => {
  const history = useHistory();

  const handleCardClick = (batch: any) => {
    history.push({
      pathname: `/alumniDetails/${batch.batchPeriod}`,
      state: batch,
    });
  };

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
        {alumniData.alumniBatches.map((batch) => (
          <div
            key={batch.batchId}
            onClick={() => handleCardClick(batch)}
            className="flex items-center justify-between m-3 shadow-md border-[#c6c6c6] border rounded-lg p-3 cursor-pointer"
          >
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0054e9] text-white font-bold">
                <p>{batch.batchId}</p>
              </div>
              <div className="flex flex-col">
                <p>Batch: {batch.batchPeriod}</p>
                <p>Members: {batch.membersCount}</p>
              </div>
            </div>
            <div>
              <IonIcon icon={chevronForwardOutline} />
            </div>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Alumni;
