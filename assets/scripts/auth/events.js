
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

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
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
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
  $('#update-game').on('submit', onUpdateGame)
  $('#show-games').on('submit', onShowGames)
}

module.exports = {
  addHandlers
}
