Spells = {
  basic:[
    {name: 'Magic Missile', type: 'Attack', target: 'foe', role: 'attack', afinity: 'basic', cost: 5},
    {name: 'Heal', type: 'recovery', target: 'caster', role: 'heal', afinity: 'basic', cost: 5, power: 5},
    {name: 'Force Armor',  type: 'buff', target: 'caster', role:'buff', afinity:'basic', cost: 5, duration: 15},
    {name: 'Mystical Judo', type: 'Repost', target: 'foe', role: 'counter', afinity: 'basic', cost: 6},
    {name: 'Warp spacetime', type: 'Perry', target: 'foe', role: 'perry', afinity: 'basic', cost: 5},
  ],
  special: [
    {name: 'Water Coffin', type: 'Attack', target: 'foe', role: 'attack', afinity: 'water', cost: 7},
    {name: 'Tidal Barrier', type: 'Perry', target: 'foe', role: 'perry', afinity: 'water', cost: 5},
    {name: 'Tidal Redirect', type: 'Repost', target: 'foe', role: 'counter', afinity: 'water', cost: 6},

    {name: 'Fire Shield', type: 'Perry', target: 'foe', role: 'perry', afinity: 'fire', cost: 7},
    {name: 'Flame Strike', type: 'Attack', target: 'foe', role: 'attack', afinity: 'fire', cost: 5},
    {name: 'Firery Boomerang', type: 'Repost', target: 'foe', role: 'counter', afinity: 'fire', cost: 6},

    {name: 'Wind Swords', type: 'Attack', target: 'foe', role: 'attack', afinity:'air', cost: 7},
    {name: 'Wall of Winds', type: 'Perry', target: 'foe', role: 'perry', afinity: 'air', cost: 5},
    {name: 'Sudden Gust', type: 'Repost', target: 'foe', role: 'counter', afinity: 'air', cost: 6},

    {name: 'Earthen Rampart', type: 'Perry', target: 'foe', role: 'perry', afinity: 'earth', cost: 7},
    {name: 'Rock Slide', type: 'Attack', target: 'foe', role: 'attack', afinity: 'earth', cost: 5},
    {name: 'Rotate Ground', type: 'Repost', target: 'foe', role: 'counter', afinity: 'earth', cost: 6},

  ]
};

module.exports = Spells;
