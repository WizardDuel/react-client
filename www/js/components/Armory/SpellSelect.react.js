import React from 'react';
import _ from 'lodash'
import SpellList from './SpellList.react';

export default class SpellSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    let spellsLeft = 3 - this.props.selectedSpells.length;
    let spells = _.groupBy(this.props.spellsList,'type')
    let lists = [];
    for (var type in spells) {
      lists.push( <SpellList spells={spells[type]} category={type} key={type} selectedSpells={this.props.selectedSpells}/> )
    }

    return (
      <div>
        <h4>Select Spells</h4>
        <h6> {spellsLeft} spells remaining</h6>
        {lists}
      </div>
    )
  }

}
