var React = require('react');

var SpellList = React.createClass({
  clickHandler: function(spell) {
    console.log(spell)
  },
  render: function(){
    var spells = []
    this.props.spells.map(function(spell) {
      spells.push(
        <a onClick={this.clickHandler.bind(this, spell)} className="list-group-item" key={spell}>{spell}</a>
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
