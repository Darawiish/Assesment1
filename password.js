var upperCaseLetters = /[A-Z]/g
// This variable checks for capital upper letters.
var lowerCaseLetter = /[a-z]/g
// This variable checks for lower case letters.
var numbers = /[0-9]/g
// This variable checks for numbers. 
var forbiddenWord1 = "password"
// This variable disallows password as an entry. 
var forbiddenWord2 = "letmein"
// This variable disallows letmein as an entry. 

let password = 'letmein'

if (password.length < 10) {
    console.log('password is too short!')
} else {
    console.log('Success! your password is long enough')
} if (password.match(upperCaseLetters)){
  console.log('Success! pswd has Upper Case letter')
} else {
  console.log('password needs Upper Case letter')
} if (password.match(lowerCaseLetter)){
  console.log('Success! password has lower case letter')
} else {
  console.log('password needs lower case case letter')
} if (password.match(numbers)){
  console.log('Success! your password includes a number')
} else {
  console.log('Please include a numerical digit!')
} if (password === forbiddenWord1) {
    console.log('STOP! password cannot be a forbidden word!')
}   else if (password === forbiddenWord2) {
    console.log('STOP! password cannot be a forbidden word!')
} else console.log('Success!')

