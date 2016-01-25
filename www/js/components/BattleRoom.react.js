var React = require('react');


var BattleRoom = React.createClass({

  render: function() {

    return (
      <div className="col-md-12">
        <h2>Successfully entered the battle!</h2>
        <button className="btn btn-primary" onClick={this.endBattle.bind(this, 'Player X')}>Win!</button>
      </div>
    )
  },
  endBattle: function(winner){
    this.props.endBattle(winner)
  }
});

module.exports = BattleRoom;
