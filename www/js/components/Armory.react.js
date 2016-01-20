var React = require('react');
var SpellSelect = require('./Armory/SpellSelect.react');


var Armory = React.createClass({

  render: function() {

    return (
      <div className="col-md-12">
        <div>
          <h2>Welcome to Wizard Duel!</h2>
          <button className="btn btn-danger" onClick={this.beginBattle}>Ready to Duel!</button>
        </div>
        <div>
          <SpellSelect spellsList={spells} />
        </div>
      </div>
    )
  },
  beginBattle: function() {
    this.props.enterBattle()
  }
});

spells = {
  defend: ['mystical shield', 'fire shield', 'wall of winds', 'earth rampart', 'tidal barrier'],
  attack: ['magic missle', 'flame strike', 'wind swords', 'earth quake', 'water coffin'],
  pary: ['mystical judo', 'firery boomerang', 'sudden gust', 'rotate ground', 'tidal redirect'],
  buff: ['bolster health', 'recover health'],
}

module.exports = Armory;
