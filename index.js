function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}
function nowServing(array) {
  if (array.length == 0) {
    return "The line is currently empty."
  } else {
     return array.shift()
  }
}
