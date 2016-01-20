var React = require('react');
var SpellList = require('./SpellList.react');

var SpellSelect = React.createClass({

  render: function(){
    var lists = [];
    var spellsList = this.props.spellsList;
    for (var type in spellsList) {
      lists.push( <SpellList spells={spellsList[type]} category={type} key={type}/> )
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
