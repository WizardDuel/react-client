import React from 'react';
import _ from 'lodash';
import SpellSelect from './Armory/SpellSelect.react';
import { SpecialSpells as Spells } from './Armory/Spells';
import { GameStore } from '../stores/GameStore';

export default class Armory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedSpells: [] }
    this.beginBattle = this.beginBattle.bind(this);
    this.addSpell = this.addSpell.bind(this);
    this.removeSpell = this.removeSpell.bind(this);
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
    this.props.enterBattle(this.state.selectedSpells);
  }

  // refactor to call ADD_SPELL and REMOVE_SPELL actions
  addSpell(spell) {
    let selectedSpells = [...GameStore.getState().spells, spell];
    GameStore.dispatch({type: 'MODIFY_SPELLS', updates: {spells: selectedSpells}});
    this.forceUpdate();
  }
  removeSpell(spell) {
    let selectedSpells = GameStore.getState().spells
    _.remove(selectedSpells, function(s) {return s.id === spell.id} )
    GameStore.dispatch({type: 'MODIFY_SPELLS', updates: {spells: selectedSpells}});
    this.forceUpdate();
  }
}
