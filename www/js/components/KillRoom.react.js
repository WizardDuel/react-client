var React = require('react');


var KillRoom = React.createClass({

  render: function() {

    return (
      <div className="col-md-12">
        <h2>{this.props.winner} wins!</h2>
        <button className="btn btn-warning" onClick={this.reset}>Play Again?</button>
      </div>
    )
  },
  reset: function(){
    this.props.reset();
  }
});

module.exports = KillRoom;
