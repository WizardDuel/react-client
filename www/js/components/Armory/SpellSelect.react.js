var React = require('react');
var SpellList = require('./SpellList.react');
var _ = require('lodash')

var SpellSelect = React.createClass({

  render: function(){
    var spellsLeft = 3 - this.props.selectedSpells.length;
    var spells = _.groupBy(this.props.spellsList['special'],'type')
    var lists = [];
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
  },
  addSpell: function(spell) {
    this.props.addSpell(spell)
  },
  removeSpell: function(spell) {
    this.props.removeSpell(spell)
  }
});

module.exports = SpellSelect;
