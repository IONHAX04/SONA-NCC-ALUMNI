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
import React, { useState } from "react";

import Achievements from "../../components/EventsComponents/Achievements";
import EventComponents from "../../components/EventsComponents/EventComponents";

const Events: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<string>("achievements");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" mode="md" />
          </IonButtons>
          <IonTitle>Events</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonSegment
          value={activeSegment}
          onIonChange={(e: any) => {
            setActiveSegment(e.detail.value!);
          }}
        >
          <IonSegmentButton value="achievements">
            <IonLabel>Achievements</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="events">
            <IonLabel>Events</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {activeSegment === "achievements" && <Achievements />}
        {activeSegment === "events" && <EventComponents />}
      </IonContent>
    </IonPage>
  );
};

export default Events;
