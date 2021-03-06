const store = require('../store')
const events = require('./events')

const signUpSuccess = function () {
  $('#message').text('Signed up successfully!')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully! Select \'new game\' to play.')
  $('#sign-out').css('display', 'block')
  $('#change-password').css('display', 'block')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-game').css('display', 'block')
  $('#show-games').css('display', 'block')
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('sign in failed')
}

const changePasswordFailure = function () {
  $('#message').text('password change failed')
}

const changePasswordSuccess = function (data) {
  $('#message').text('password change successful')
}

const signOutSuccess = function () {
  $('#message').text('Signed Out Successfully')
  $('#create-game').hide()
  $('#show-games').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.box').hide()
  $('.games-ui').hide(50)
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed')
}

const createGameSuccess = function (data) {
  $('#message').text('new game made')
  store.user.game = data.game
  $('#who-won').hide(500)
  $('.games-ui').hide(500)
  $('.box').fadeIn(100)
}
const createGameFailure = function (data) {
  $('#message').text('please sign in first')
}
const updateGameSuccess = function (data) {
}
const updateGameFailiure = function (data) {
  $('#message').text('game could not be updated')
}
const showGamesSuccess = function (data) {
  $('.games-ui').html('You have played ' + data.games.length + ' games')
  $('.games-ui').css('display', 'block')
  $('.games-ui').show(50)
}
const showGamesFailiure = function (data) {
  $('#message').text('cannot show games')
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
