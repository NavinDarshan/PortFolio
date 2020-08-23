import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import "./styles.css";
import Home1 from './Home/Home';
import Product1 from './Product/Products';
import About from './About/about'
import Contact from './About/contact'
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="roomToBottom"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home1} />
                <Route exact path="/product" component={Product1} />
                <Route exact path = "/about" component = {About} />
                <Route excat path = "/contact" component = {Contact} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
