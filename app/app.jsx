var React = require('react');
var ReactDOM= require('react-dom');
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
      </div>
      <div className="col-sm-4">
        <h1>React Boilerplate</h1>
        <label>React Boilerplate</label>
        <input type="text"/>
        <button className="btn btn-success">hi</button>
      </div>
      <div className="col-sm-4">
      </div>
    </div>
  </div>
 ,
  document.getElementById('app')
);
