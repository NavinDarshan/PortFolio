import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter} from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import "./styles.css";
import Home1 from './Home/Home';
import Product1 from './Product/Products';
import About from './About/about'
import Contact from './About/contact'
import * as serviceWorker from './serviceWorker';


class App extends React.Component{
  render(){
    return (
      <HashRouter>
        <Route
          render={({ location }) => {
            return (
              <PageTransition
                preset="roomToBottom"
                transitionKey={location.pathname}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home1} />
                  <Route  path="/product" component={Product1} />
                  <Route  path = "/about" component = {About} />
                  <Route  path = "/contact" component = {Contact} />
                </Switch>
              </PageTransition>
            );
          }}
        />
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
