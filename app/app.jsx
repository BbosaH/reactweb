/**
 * @Author: Henry Bbosa
 * @Date:   2017-10-11T09:05:30+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: reactweb
 * @Filename: app.jsx
 * @Last modified by:   Henry Bbosa
 * @Last modified time: 2017-10-16T16:14:11+03:00
 */



import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
// import {BrowserRouter as Router ,Route,IndexRoute,hashHistory} from 'react-router';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {config} from 'ConfigureStore';
import {Provider} from 'react-redux';
import IndexContainer from 'IndexContainer'
import HomeContainer from 'HomeContainer';
import ShareKnowlegeOptions  from 'ShareKnowlegeOptions';



const store = config();
store.subscribe(()=>{
  console.log("new state ==>",store.getState())
});





class App extends Component{
  render(){
    return(

        <Switch>
          <Route exact={true} path="/" component={IndexContainer}> </Route>
          <Route exact={true} path="/home" component={HomeContainer}> </Route>
          <Route exact={true} path="/shareDash" component={ShareKnowlegeOptions}> </Route>
        </Switch>

    )
  }
}

// class Links extends Component{
//   render(){
//     return(
//
//         <div>
//           <NavLink to="/">House </NavLink>
//           <NavLink to="/home">home </NavLink>
//         </div>
//
//     )
//   }
// }




ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
 ,
  document.getElementById('app')
);
