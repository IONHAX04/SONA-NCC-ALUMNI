import { Redirect, Route, useLocation } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { calendar, home, notifications, person, ribbon } from "ionicons/icons";
import SplashScreen from "../pages/00-SplashScreen/SplashScreen";
import GetStarted from "../pages/01-GetStarted/GetStarted";
import Login from "../pages/02-Login/Login";
import Home from "../pages/04-Home/Home";
import Events from "../pages/05-Events/Events";
import Alerts from "../pages/06-Alerts/Alerts";
import Profile from "../pages/07-Profile/Profile";
import Alumni from "../pages/08-Alumni/Alumni";

const MainRoutes: React.FC = () => {
  const location = useLocation();

  const tabRoutes = ["/home", "/events", "/alumni", "/alerts", "/profile"];
  const shouldShowTabs = tabRoutes.includes(location.pathname);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/splashScreen" component={SplashScreen} />
        <Route exact path="/getStarted" component={GetStarted} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/alerts" component={Alerts} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/alumni" component={Alumni} />

        <Route exact path="/">
          <Redirect to="/splashScreen" />
        </Route>
      </IonRouterOutlet>

      {shouldShowTabs && (
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="events" href="/events">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Events</IonLabel>
          </IonTabButton>
          <IonTabButton tab="alumni" href="/alumni">
            <IonIcon aria-hidden="true" icon={ribbon} />
            <IonLabel>Alumni</IonLabel>
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
      )}
    </IonTabs>
  );
};

export default MainRoutes;
