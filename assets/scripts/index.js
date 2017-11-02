'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const marks = ['', '', '', '', '', '', '', '', '']
const turns = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const turn = function (marks, id) {
//   for (let i = 0; i < turns.length; i++) {
//     if (turn % 2 === 0) {
//       marks[id] = 'x'
//     }
//   }
// }

// const markBoard = function (turn) {
//   $('.box').click(function () {
//     $(this).html('<p>' + turn + '<p>')
//     turns.shift()
//     console.log(turns)
//   })
// }

const changeTurn = function () {
  let whosTurn = ''
  for (let i = 0; i < turns.length; i++) {
    if (turns[i] % 2 === 0) {
      whosTurn = 'o'
      turns.shift()
      return whosTurn
    } else {
      whosTurn = 'x'
      turns.shift()
      return whosTurn
    }
  }
}

$('.box').click(function () {
  $(this).html('<p>' + changeTurn() + '<p>')
})

// markBoard(changeTurn())

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
