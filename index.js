function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
     return `Currently serving ${line.shift()}.`
  }
}
function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    line.forEach((person, index) => {
      var person = []
      person.push(`${index+1}. ${person}`)
      console.log(person)
    })
  }
}
