#!/usr/bin/env node

import getRandomInt  from '../src/utils/getRandomInt.js'
import getUserName from '../src/cli.js'


const calcGame = () => {
    const name = getUserName()

    const singedArray = ['+', '-', '*', '/']

    console.log('What is the result of the expression?')

    for (let i = 0; i < 3; i++) {
        let firstNumber = getRandomInt(2, 15)
        let secondNumber = getRandomInt(2, 15)


    }
}



calcGame()
