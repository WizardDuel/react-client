import React from 'react';
import _ from 'lodash';
import SpellSelect from './Armory/SpellSelect.react';
import { Spells } from './Armory/Spells';

export default class Armory extends React.Component {
  constructor(props) {
    super(props)
     this.state = { selectedSpells: [] }
   }

  render() {
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
  }

  beginBattle() {
    this.props.enterBattle(this.state.selectedSpells)
  }
  
  addSpell(spell) {
    var selectedSpells = this.state.selectedSpells
    selectedSpells.push(spell)
    this.replaceState({selectedSpells: selectedSpells})
  }
  removeSpell(spell) {
    var selectedSpells = this.state.selectedSpells
    _.remove(selectedSpells, function(s) {return s.id === spell.id} )
    this.replaceState({selectedSpells: selectedSpells})
  }
}
