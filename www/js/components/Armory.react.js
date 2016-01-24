import React from 'react';
import _ from 'lodash';
import SpellSelect from './Armory/SpellSelect.react';
import { Spells } from './Armory/Spells';


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
