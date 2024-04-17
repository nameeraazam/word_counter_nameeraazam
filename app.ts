#! /usr/bin/env node

//import the inquirer module which is command line interface on nodejs
import inquirer from "inquirer"

//declare a const answers and assign it to the result of inquirer function

const answers:{
  sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the word: "

    }
])

const words = answers.sentence.trim().split(" ")

//print the array of words in console
console.log(words)

//print yhe word count of sentence to console
console.log(`Your sentence word count is ${words.length}`);