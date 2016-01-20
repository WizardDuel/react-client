var React = require('react');
var SpellList = require('./SpellList.react');
var _ = require('lodash')

var SpellSelect = React.createClass({


  render: function(){

    var spells = _.groupBy(this.props.spellsList['special'],'type')
    console.log(spells)
    var lists = [];
    for (var type in spells) {
      lists.push( <SpellList spells={spells[type]} category={type} key={type}/> )
    }

    return (
      <div>
        <h4>Select Spells</h4>
        {lists}
      </div>
    )
  }
});

module.exports = SpellSelect;
