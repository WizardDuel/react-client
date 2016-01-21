var React = require('react');
var _ = require('lodash')

var SpellList = React.createClass({
  clickHandler: function(spell) {
    console.log(spell)
  },
  render: function(){
    var spells = []
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
  },

  clickHandler: function(spell) {
    var spellButton = document.getElementById('spell-' + spell.id)
    if(this.props.selectedSpells.length < 3) {
      if (!_.includes(this.props.selectedSpells, spell)) {
        this.props.addSpell(spell)
        spellButton.classList.toggle('active')
      }else {
       this.props.removeSpell(spell)
       spellButton.classList.toggle('active')
     }
   } else {
     if (_.includes(this.props.selectedSpells, spell)) {
       this.props.removeSpell(spell)
       spellButton.classList.toggle('active')
     }
   }
 }

})

module.exports = SpellList;
