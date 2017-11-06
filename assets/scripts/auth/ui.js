const store = require('../store')
const events = require('./events')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up successfull!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed in Successful')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Signed in Failed')
}

const changePasswordFailure = function () {
  $('#message').text('password change Failed')
}

const changePasswordSuccess = function (data) {
  console.log('data is ' + data)
  $('#message').text('password change Successful')
}

const signOutSuccess = function () {
  $('#message').text('Sign Out Successful')
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed')
}

const createGameSuccess = function (data) {
  $('#message').text('new game made')
  store.user.game = data.game
  console.log('new game ' + data.game.games)
  events.marks = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  events.turns = [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
const createGameFailure = function (data) {
  $('#message').text('please sign in first')
  console.log(data)
}
const updateGameSuccess = function (data) {
  $('#message').text('game updated')
  console.log(store.user.game.over)
  store.user.game.cells[store.gameState.game.cell.index] = store.gameState.game.cell.value
}
const updateGameFailiure = function (data) {
  $('#message').text('game could not be updated')
  console.log(data)
}
const showGamesSuccess = function (data) {
  $('#message').text('success')
  console.log(data)
}
const showGamesFailiure = function (data) {
  $('#message').text('cannot show games')
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailiure,
  showGamesSuccess,
  showGamesFailiure
}
