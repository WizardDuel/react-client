import React from 'react'
import _ from 'lodash'
import {GameStore} from '../../stores/GameStore'

export default class SpellList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let spells = []
    this.props.spells.map(function(spell) {
      var classNameList = ['list-group-item', 'spell'];
      switch(spell.afinity) {
        case 'air':
          // classNameList.push('');
          break;
        case 'earth':
          classNameList.push('list-group-item-warning');
          break;
        case 'fire':
          classNameList.push('list-group-item-danger');
          break;
        case 'water':
          classNameList.push('list-group-item-info');
          break;
      }
      spells.push(
        <a id={'spell-' + spell.id}
        onClick={this.clickHandler.bind(this, spell)}
        className={classNameList.join(' ')}
        key={spell.id}>
          {spell.name}
        </a>
      )
    }, this)
    return (
      <div className='col-md-3'>
        <h5>{this.props.category}</h5>
        <div className='list-group'>
          {spells}
        </div>
      </div>
    )
  }

  clickHandler(spell) {
    let selectedSpells = GameStore.getState().spells;
    let spellButton = document.getElementById('spell-' + spell.id)
    if(selectedSpells.length < 3) {
      if (!_.includes(selectedSpells, spell)) {
        GameStore.dispatch({type: 'ADD_SPELL', spell})
        spellButton.classList.toggle('active')
      }else {
        GameStore.dispatch({type: 'REMOVE_SPELL', spell})
        spellButton.classList.toggle('active')
     }
   } else {
     if (_.includes(selectedSpells, spell)) {
       GameStore.dispatch({type: 'REMOVE_SPELL', spell})
       spellButton.classList.toggle('active')
     }
   }
 }
}
