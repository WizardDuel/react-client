var React = require('react');
var SpellSelect = require('./Armory/SpellSelect.react');
var Spells = require('./Armory/Spells')

var Armory = React.createClass({

  render: function() {
    return (
      <div className="col-md-12">
        <div>
          <h2>Welcome to Wizard Duel!</h2>
          <button className="btn btn-danger" onClick={this.beginBattle}>Ready to Duel!</button>
        </div>
        <div>
          <SpellSelect spellsList={Spells} />
        </div>
      </div>
    )
  },
  beginBattle: function() {
    this.props.enterBattle()
  }
});

module.exports = Armory;
