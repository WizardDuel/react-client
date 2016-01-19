var React = require('react');


var WaitingRoom = React.createClass({

  render: function() {

    return (
      <div className="col-md-12">
        <h2>Welcome to Wizard Duel!</h2>
        <button className="btn btn-default" onClick={this.beginBattle}>Ready to Duel!</button>
      </div>
    )
  },
  beginBattle: function(){
    this.props.enterBattle()
   }
});

module.exports = WaitingRoom;
