import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React from "react";

const Events: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" mode="md" />
          </IonButtons>
          <IonTitle>Events</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSegment value="achievements">
            <IonSegmentButton value="achievements">
              <IonLabel>Achievements</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="events">
              <IonLabel>Events</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default Events;
