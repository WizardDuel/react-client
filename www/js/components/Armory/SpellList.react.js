var React = require('react');

var SpellList = React.createClass({
  clickHandler: function(spell) {
    console.log(spell)
  },
  render: function(){
    var spells = []
    this.props.spells.map(function(spell) {
      var itemType;
      switch(spell.afinity) {
        case 'air':
          itemType = ''
          break;
        case 'earth':
          itemType = 'list-group-item-warning'
          break;
        case 'fire':
          itemType = 'list-group-item-danger'
          break;
        case 'water':
          itemType = 'list-group-item-info'
          break;
      }
      spells.push(
        <a onClick={this.clickHandler.bind(this, spell)} className={"list-group-item " + itemType} key={spell.name}>{spell.name}</a>
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



})

module.exports = SpellList;
