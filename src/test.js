import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';


class App12 extends React.Component{
  render(){
    return (
        <p>its ok</p>
    );
  }
}

ReactDOM.render(
    <App12 />,
  document.getElementById('app12')
);

serviceWorker.unregister();
export default App12;