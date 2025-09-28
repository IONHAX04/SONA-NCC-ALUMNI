import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonModal,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";

const BatchDetails: React.FC = () => {
  const history = useHistory();

  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  const [selectedYearRange, setSelectedYearRange] = useState<string | null>(
    null
  );
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [selectedRank, setSelectedRank] = useState<string | null>(null);

  const [modalType, setModalType] = useState<"year" | "unit" | "rank" | null>(
    null
  );

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
    setModalType(null);
  }

  // Generate year ranges: 2010-2013 up to 2026-2029
  const years = Array.from({ length: 17 }, (_, i) => {
    const start = 2010 + i;
    const end = start + 3;
    return `${start} - ${end}`;
  });

  const units = ["11 TN SIG COY", "12 TN BN NCC"];

  const ranks = [
    "Cadet",
    "Lance Corporal",
    "Corporal",
    "Sergeant",
    "Company Sergeant Major",
    "Company Quartermaster Sergeant",
    "Cadet Under Officer (CUO)",
    "Senior Under Officer (SUO)",
  ];

  const openModal = (type: "year" | "unit" | "rank") => {
    setModalType(type);
    modal.current?.present();
  };

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" mode="md" />
          </IonButtons>
          <IonTitle>Batch Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Year */}
        <IonItem lines="full" button onClick={() => openModal("year")}>
          <IonLabel>Year</IonLabel>
          <p slot="end" className="text-[#1173d4]">
            {selectedYearRange ?? "Select Year Range"}
          </p>
        </IonItem>

        {/* Unit */}
        <IonItem lines="full" button onClick={() => openModal("unit")}>
          <IonLabel>Unit</IonLabel>
          <p slot="end" className="text-[#1173d4]">
            {selectedUnit ?? "Select Unit"}
          </p>
        </IonItem>

        {/* Rank */}
        <IonItem lines="full" button onClick={() => openModal("rank")}>
          <IonLabel>Rank</IonLabel>
          <p slot="end" className="text-[#1173d4]">
            {selectedRank ?? "Select Rank"}
          </p>
        </IonItem>

        {/* Inputs */}
        <div className="p-4 space-y-4">
          {" "}
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none"
          />{" "}
          <input
            type="text"
            style={{ marginTop: "8px" }}
            placeholder="Mobile"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none"
          />{" "}
          <input
            type="text"
            style={{ marginTop: "8px" }}
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none"
          />{" "}
          <input
            type="text"
            style={{ marginTop: "8px" }}
            placeholder="Designation"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none"
          />{" "}
          <button
            onClick={() => history.push("/home")}
            className="w-full bg-[#1173d4] mt-4 rounded-lg text-white uppercase font-bold py-3"
            style={{
              padding: "15px",
              borderRadius: "7px",
              textTransform: "uppercase",
            }}
          >
            {" "}
            Submit{" "}
          </button>{" "}
        </div>

        {/* Shared Modal */}
        <IonModal ref={modal} presentingElement={presentingElement!}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                {modalType === "year"
                  ? "Select Year Range"
                  : modalType === "unit"
                  ? "Select Unit"
                  : "Select Rank"}
              </IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={dismiss}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              {modalType === "year" &&
                years.map((range) => (
                  <IonItem
                    key={range}
                    button
                    onClick={() => {
                      setSelectedYearRange(range);
                      dismiss();
                    }}
                  >
                    <IonLabel>{range}</IonLabel>
                  </IonItem>
                ))}
              {modalType === "unit" &&
                units.map((unit) => (
                  <IonItem
                    key={unit}
                    button
                    onClick={() => {
                      setSelectedUnit(unit);
                      dismiss();
                    }}
                  >
                    <IonLabel>{unit}</IonLabel>
                  </IonItem>
                ))}
              {modalType === "rank" &&
                ranks.map((rank) => (
                  <IonItem
                    key={rank}
                    button
                    onClick={() => {
                      setSelectedRank(rank);
                      dismiss();
                    }}
                  >
                    <IonLabel>{rank}</IonLabel>
                  </IonItem>
                ))}
            </IonList>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default BatchDetails;
