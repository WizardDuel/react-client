var React = require('react');
var SpellSelect = require('./Armory/SpellSelect.react');
var Spells = require('./Armory/Spells')

var Armory = React.createClass({

  render: function() {
    return (
      <div className="col-md-12">
        <div className="row">
          <h2>Welcome to Wizard Duel!</h2>
        </div>
        <div className="row">
          <SpellSelect spellsList={Spells} />
        </div>
        <div className="row">
          <div className="col-md-3 col-md-offset-6">
            <button className="btn btn-danger pull-right" onClick={this.beginBattle}>Ready to Duel!</button>
          </div>
        </div>
      </div>
    )
  },
  beginBattle: function() {
    this.props.enterBattle()
  }
});

module.exports = Armory;
