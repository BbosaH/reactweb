var React = require('react');
import 'bootstrap/dist/css/bootstrap.css';

var TopLeft = React.createClass({
  render : function(){
    return(
      <div className="container">
        <div className="panel panel-body">
          <h1>This is the topleft compoent</h1>  
        </div>

      </div>

    );
  }
});

module.exports = TopLeft;
