// look up methods
// look up classes
// How do i capture this input: form, command line
// create an object from the input.

/* 
CREATE TO DO LIST
1. Create a to do list
2. Find a way to organize it and store it

BUILD ROBOT WITH USER INPUT
1. Get prompted from user input
2. Organize input (research JS Objects, Methods, Classes) into robot
3. Add a robot method that can modify your to do list and check items off as done
4. Once you've created the robot, where does it go? How do you access it? Add more? Etc.

USE USER INPUT TO OPERATE THE ROBOT YOUR BUILT
1. Find a way for users to call the to do list method and get robots to do work
2. Add optional functionality like visual interface/frontend, leaderboard, etc.

*/

let tasks = [
  {
    description: "do the dishes",
    eta: 1000,
  },
  {
    description: "sweep the house",
    eta: 3000,
  },
  {
    description: "do the laundry",
    eta: 10000,
  },
  {
    description: "take out the recycling",
    eta: 4000,
  },
  {
    description: "make a sammich",
    eta: 7000,
  },
  {
    description: "mow the lawn",
    eta: 20000,
  },
  {
    description: "rake the leaves",
    eta: 18000,
  },
  {
    description: "give the dog a bath",
    eta: 14500,
  },
  {
    description: "bake some cookies",
    eta: 8000,
  },
  {
    description: "wash the car",
    eta: 20000,
  },
];

function runTask(tasks) {
  for (let i = 0; (i = tasks.length); i++) {
    // if task[i] = 4
    // return i[1]
    // return i[2]
    // return i[3]
    // etc...
  }
}

// I would go use a for loop to go through the first 5 indexes of the array and return a console.log saying that the task of that index has been completed.
