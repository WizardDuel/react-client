import React from 'react';
import _ from 'lodash';
import SpellSelect from './Armory/SpellSelect.react';
import { SpecialSpells as Spells } from './Armory/Spells';
import { GameStore } from '../stores/GameStore';

export default class Armory extends React.Component {
  constructor(props) {
    super(props)
    this.beginBattle = this.beginBattle.bind(this);
   }

  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <h2>Welcome to Wizard Duel!</h2>
        </div>
        <div className="row">
          <SpellSelect spellsList={Spells} selectedSpells={GameStore.getState().spells}/>
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
    this.props.enterBattle(GameStore.getState().spells);
  }
}
