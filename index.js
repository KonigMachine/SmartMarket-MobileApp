import {AppRegistry} from 'react-native';
import App from './App'
import {UserProvider} from "./context"

ReactDOM.render(<App/>,document.getElementById('root'));

//AppRegistry.registerComponent("SmartCar", () => App);

/*
AppRegistry.registerComponent("SmartCar", function(){
  return App;
})
*/
