var React = require('react');
var SpellSelect = require('./Armory/SpellSelect.react');
var Spells = require('./Armory/Spells');
var _ = require('lodash');

var Armory = React.createClass({
  getInitialState: function() {
    return {
      selectedSpells: []
    }
  },

  render: function() {
    return (
      <div className="col-md-12">
        <div className="row">
          <h2>Welcome to Wizard Duel!</h2>
        </div>
        <div className="row">
          <SpellSelect spellsList={Spells} addSpell={this.addSpell} removeSpell={this.removeSpell} selectedSpells={this.state.selectedSpells}/>
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
    this.props.enterBattle(this.state.selectedSpells)
  },
  addSpell: function(spell) {
    var selectedSpells = this.state.selectedSpells
    selectedSpells.push(spell)
    this.replaceState({selectedSpells: selectedSpells})
  },
  removeSpell: function(spell) {
    var selectedSpells = this.state.selectedSpells
    _.remove(selectedSpells, function(s) {return s.id === spell.id} )
    this.replaceState({selectedSpells: selectedSpells})
  }
});

module.exports = Armory;
