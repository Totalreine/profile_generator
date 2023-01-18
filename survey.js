const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite meal?(dinner,lunch,..)", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            rl.question("What is your superpower?", (answer7) => {
                console.log(`${answer1} loves listening to ${answer2} while ${answer3},devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}`)

              rl.close();
              
            })
          })
        })
      })
    })
  })
});

