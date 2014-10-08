/*
  The "move" function must return "North", "South", "East", "West", or "Stay"
  (Anything else will be interpreted by the game as "Stay")

  The "move" function should accept two arguments that the website will be passing in:
    - a "gameData" object which holds all information about the current state
      of the battle

    - a "helpers" object, which contains useful helper functions
      - check out the helpers.js file to see what is available to you
*/

var move = function(gameData, helpers) {
  var hero = gameData.activeHero;
  var healthWell = helpers.findNearestHealthWell(gameData);

  if (hero.health < 40) {
    // Heal no matter what if low health
    return healthWell.direction;
  } else if (hero.health < 100 && healthWell.distance === 1) {
    // Heal if you aren't full health and are close to a health well already
    return healthWell.direction;
  } else {
    // If healthy, go capture a diamond mine!
    return helpers.findNearestNonTeamDiamondMine(gameData).direction;
  }
};

module.exports = move;
