const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  const name = answer;
  rl.question('what\'s an activity you like doing? ', (answer) => {
    const favActivity = answer;
    rl.question('what do you listen to while doing that? ', (answer) => {
      const activityMusic = answer;
      rl.question('which meal is your favorite? (eg: dinner, brunch, etc) ', (answer) => {
        const favMeal = answer;
        rl.question('what\'s your favorite thing to eat for that meal? ', (answer) => {
          const favMealItem = answer;
          rl.question('which sport is your absolute favorite? ', (answer) => {
            const favSport = answer;
            rl.question('what is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              const superPower = answer;
              console.log('===========================================')
              console.log('-------------------------------------------')
              console.log('===========================================')
              console.log(`My name is ${name}, my favorite activity is ${favActivity}. I like to listen to ${activityMusic} while ${favActivity}. My favourite meal is ${favMealItem} during ${favMeal}. My absolute favorite sport is ${favSport}. And ${superPower}.`);

              rl.close();
            })
          })
        })
      })
    })
  })
});
