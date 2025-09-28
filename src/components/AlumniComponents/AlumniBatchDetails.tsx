import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

interface RouteParams {
  batchPeriod: string;
}

const AlumniBatchDetails: React.FC = () => {
  const { batchPeriod } = useParams<RouteParams>();
  const location = useLocation<{
    batchId: string;
    batchPeriod: string;
    membersCount: number;
  }>();
  const batch = location.state;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/alumni" mode="md" />
          </IonButtons>
          <IonTitle>Batch {batchPeriod}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="">
          {batch ? (
            <>
              <div
                key={batch.batchId}
                className="flex items-center justify-between m-3 shadow-md border-[#c6c6c6] border rounded-lg p-3 cursor-pointer"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0054e9] text-white font-bold">
                    <p>{batch.batchId}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Name: Thirukumara</p>
                    <p>Rank: CQMS</p>
                    <p>Mobile: 9394939291</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>No data found</p>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AlumniBatchDetails;
