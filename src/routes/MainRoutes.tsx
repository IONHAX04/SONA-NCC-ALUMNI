import { Redirect, Route, useLocation } from "react-router-dom";
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
  const location = useLocation();

  // define the routes where tab bar should be visible
  const tabRoutes = ["/home", "/events", "/alerts", "/profile"];
  const shouldShowTabs = tabRoutes.includes(location.pathname);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/splashScreen" component={SplashScreen} />
        <Route exact path="/getStarted" component={GetStarted} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/events">
          <div>Events Page</div>
        </Route>
        <Route exact path="/alerts">
          <div>Alerts Page</div>
        </Route>
        <Route exact path="/profile">
          <div>Profile Page</div>
        </Route>

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
