import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { calendar, home, notifications, person } from "ionicons/icons";
import SplashScreen from "../pages/00-SplashScreen/SplashScreen";
import GetStarted from "../pages/01-GetStarted/GetStarted";
import Login from "../pages/02-Login/Login";
import Home from "../pages/04-Home/Home";

const MainRoutes: React.FC = () => {
  return (
    <div>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/splashScreen">
            <SplashScreen />
          </Route>
          <Route exact path="/getStarted">
            <GetStarted />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="events" href="/events">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Events</IonLabel>
          </IonTabButton>
          <IonTabButton tab="alerts" href="/alerts">
            <IonIcon aria-hidden="true" icon={notifications} />
            <IonLabel>Alerts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </div>
  );
};

export default MainRoutes;
