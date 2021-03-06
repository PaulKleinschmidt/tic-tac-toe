
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let marks = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let turns = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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

const updateBoard = function () {
  if (($('#message').text() === 'Success') || ($('#message').text() === 'new game made' || $('#message').text() === 'game updated')) {
    if (($(this).html() !== 'x') && ($(this).html() !== 'o')) {
      $(this).html(changeTurn())
      marks.splice(this.id, 1, $(this).html())
      let checkDraw = 0
      if (checkWin() === false) {
        store.gameState.game.cell.index = this.id
        store.gameState.game.cell.value = $(this).html()
        store.gameState.game.over = false
        onUpdateGame()
      } else if (checkWin() !== false) {
        store.gameState.game.cell.index = this.id
        store.gameState.game.cell.value = $(this).html()
        store.gameState.game.over = true
        onUpdateGame()
        $('#message').text('yay!')
        $('#who-won').show()
        $('#who-won').html($(this).html() + ' wins!')
      } for (let i = 0; i < marks.length; i++) {
        if (marks[i] !== 0) {
          checkDraw += 1
        }
      } if (checkDraw === 9 && checkWin() === false) {
        $('#who-won').show()
        $('#who-won').html('nobody wins!')
      }
    }
  }
}

const checkWin = function () {
  if ((marks[0] === marks[1] && marks[1] === marks[2]) && (marks[0] !== 0)) { // horizontal wins
    return (marks[0] + ' wins!')
  } else if ((marks[3] === marks[4] && marks[4] === marks[5]) && (marks[3] !== 0)) {
    return (marks[3] + ' wins!')
  } else if ((marks[6] === marks[7] && marks[7] === marks[8]) && (marks[6] !== 0)) {
    return (marks[6] + ' wins!')
  } else if ((marks[0] === marks[3] && marks[3] === marks[6]) && (marks[0] !== 0)) { // vertical wins
    return (marks[0] + ' wins!')
  } else if ((marks[1] === marks[4] && marks[4] === marks[7]) && (marks[1] !== 0)) {
    return (marks[1] + ' wins!')
  } else if ((marks[2] === marks[5] && marks[5] === marks[8]) && (marks[2] !== 0)) {
    return (marks[2] + ' wins!')
  } else if ((marks[0] === marks[4] && marks[4] === marks[8]) && (marks[0] !== 0)) { // diagonal wins
    return (marks[0] + ' wins!')
  } else if ((marks[2] === marks[4] && marks[4] === marks[6]) && (marks[2] !== 0)) {
    return (marks[2] + ' wins!')
  } else {
    return false
  }
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  marks = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turns = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  $('.box').html('')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function (event) {
  marks = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turns = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  $('.box').html('')
  const data = getFormFields(this)
  console.log('here we have the data: ', data)
  event.preventDefault()
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
  const data = store.gameState
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailiure)
}

const onShowGames = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.showGames(data)
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailiure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-game').on('submit', onCreateGame)
  // $('#update-game').on('submit', onUpdateGame)
  $('#show-games').on('submit', onShowGames)
  $('.box').click(updateBoard)
}

module.exports = {
  addHandlers
}
