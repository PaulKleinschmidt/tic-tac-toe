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
  $('#sign-out').css('display', 'block')
  $('#change-password').css('display', 'block')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-game').css('display', 'block')
  $('#show-games').css('display', 'block')

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
  $('#create-game').hide()
  $('#show-games').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed')
}

const createGameSuccess = function (data) {
  $('#message').text('new game made')
  store.user.game = data.game
  console.log('new game ' + data.game.cells)
}
const createGameFailure = function (data) {
  $('#message').text('please sign in first')
  console.log(data)
}
const updateGameSuccess = function (data) {
  $('#message').text('game updated')
  console.log(store.user.game)
}
const updateGameFailiure = function (data) {
  $('#message').text('game could not be updated')
  console.log(data)
}
const showGamesSuccess = function (data) {
  $('#message').text('success')
  console.log(data.games.length)
  $('.games-ui').html('you have played ' + data.games.length + ' games')
  $('.games-ui').css('display', 'block')
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
