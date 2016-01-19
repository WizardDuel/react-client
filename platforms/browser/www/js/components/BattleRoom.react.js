var React = require('react');


var BattleRoom = React.createClass({

  render: function() {

    return (
      <div className="col-md-12">
        <h2>Successfully entered the battle!</h2>
        <button className="btn btn-danger" onClick={this.winBattle}>Win!</button>
      </div>
    )
  },
  winBattle: function(){}
});

module.exports = BattleRoom;
