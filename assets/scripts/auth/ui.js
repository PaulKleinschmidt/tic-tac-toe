const store = require('../store')

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

const changePasswordFailure = function (error) {
  console.error(error)
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
