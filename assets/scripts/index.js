'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  events.addHandlers()
})

const marks = [0, 0, 0, 0, 0, 0, 0, 0, 0]
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

const changeTurn = function () { // this function returns either x or o by shortening the turns array with shift(). alternating starting with o.
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
  console.log($(this).html())
  if (($(this).html() !== 'x') && ($(this).html() !== 'o')) {
    $(this).html(changeTurn())
    marks.splice(this.id, 1, $(this).html()) // adds the last x or o to the marks array
    console.log(marks)
  } checkWin()
})

const checkWin = function () {
  if ((marks[0] === marks[1] && marks[1] === marks[2]) && (marks[0] !== 0)) { // horizontal wins
    console.log(marks[0] + ' wins!')
  } else if ((marks[3] === marks[4] && marks[4] === marks[5]) && (marks[3] !== 0)) {
    console.log(marks[3] + ' wins!')
  } else if ((marks[6] === marks[7] && marks[7] === marks[8]) && (marks[6] !== 0)) {
    console.log(marks[6] + ' wins!')
  } else if ((marks[0] === marks[3] && marks[3] === marks[6]) && (marks[0] !== 0)) { // vertical wins
    console.log(marks[0] + ' wins!')
  } else if ((marks[1] === marks[4] && marks[4] === marks[7]) && (marks[1] !== 0)) {
    console.log(marks[1] + ' wins!')
  } else if ((marks[2] === marks[5] && marks[5] === marks[8]) && (marks[2] !== 0)) {
    console.log(marks[2] + ' wins!')
  } else if ((marks[0] === marks[4] && marks[4] === marks[8]) && (marks[0] !== 0)) { // diagonal wins
    console.log(marks[0] + ' wins!')
  } else if ((marks[2] === marks[4] && marks[4] === marks[6]) && (marks[2] !== 0)) {
    console.log(marks[2] + ' wins!')
  }
}

// markBoard(changeTurn())

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
