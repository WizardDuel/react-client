export const BasicSpells = [
  {name: 'Magic Missile', type: 'Attack', target: 'foe', role: 'attack', afinity: 'basic', cost: 5, id:1},
  {name: 'Heal', type: 'recovery', target: 'caster', role: 'heal', afinity: 'basic', cost: 5, power: 5, id:2},
  {name: 'Force Armor',  type: 'buff', target: 'caster', role:'buff', afinity:'basic', cost: 5, duration: 15, id:3},
  {name: 'Mystical Judo', type: 'Repost', target: 'foe', role: 'counter', afinity: 'basic', cost: 6, id:4},
  {name: 'Warp spacetime', type: 'Perry', target: 'foe', role: 'perry', afinity: 'basic', cost: 5, id:5},
];
export const SpecialSpells = [
  {name: 'Water Coffin', type: 'Attack', target: 'foe', role: 'attack', afinity: 'water', cost: 7, id:6},
  {name: 'Tidal Barrier', type: 'Perry', target: 'foe', role: 'perry', afinity: 'water', cost: 5, id:7},
  {name: 'Whirlpool', type: 'Repost', target: 'foe', role: 'counter', afinity: 'water', cost: 6, id:8},

  {name: 'Fire Shield', type: 'Perry', target: 'foe', role: 'perry', afinity: 'fire', cost: 7, id:9},
  {name: 'Flame Strike', type: 'Attack', target: 'foe', role: 'attack', afinity: 'fire', cost: 5, id:10},
  {name: 'Firery Boomerang', type: 'Repost', target: 'foe', role: 'counter', afinity: 'fire', cost: 6, id:11},

  {name: 'Wind Swords', type: 'Attack', target: 'foe', role: 'attack', afinity:'air', cost: 7, id:12},
  {name: 'Wall of Winds', type: 'Perry', target: 'foe', role: 'perry', afinity: 'air', cost: 5, id:13},
  {name: 'Sudden Gust', type: 'Repost', target: 'foe', role: 'counter', afinity: 'air', cost: 6, id:14},

  {name: 'Earthen Rampart', type: 'Perry', target: 'foe', role: 'perry', afinity: 'earth', cost: 7, id:15},
  {name: 'Rock Slide', type: 'Attack', target: 'foe', role: 'attack', afinity: 'earth', cost: 5, id:16},
  {name: 'Rotate Ground', type: 'Repost', target: 'foe', role: 'counter', afinity: 'earth', cost: 6, id:17},
];
