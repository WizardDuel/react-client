import React from 'react';
import _ from 'lodash'
import SpellList from './SpellList.react';

export default class SpellSelect extends React.Component {

  render(){
    let spellsLeft = 3 - this.props.selectedSpells.length;
    let spells = _.groupBy(this.props.spellsList,'type')
    let lists = [];
    for (var type in spells) {
      lists.push( <SpellList spells={spells[type]} category={type} key={type} addSpell={this.addSpell} removeSpell={this.removeSpell} selectedSpells={this.props.selectedSpells}/> )
    }

    return (
      <div>
        <h4>Select Spells</h4>
        <h6> {spellsLeft} spells remaining</h6>
        {lists}
      </div>
    )
  }

  addSpell(spell) {
    this.props.addSpell(spell)
  }
  removeSpell (spell) {
    this.props.removeSpell(spell)
  }
}
