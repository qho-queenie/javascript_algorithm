// The value of the username property is composed by concatenating:
//
// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age
// from the current year. Please make sure that your function delivers the correct birth year irrespective
// of when it will be executed, for example it should also work correctly for a meetup organised
// in 10-years-time. The example above assumes that the function is run in year 2020.
// Notes:
//
// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.
// Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
// Order of the objects in the array should be maintained but order of the properties
// in the individual objects does not matter.
//
//
//
//
// This kata is part of the Coding Meetup series which includes a number of short and
// easy to follow katas which have been designed to allow mastering the use of higher-order
// functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find,
// findIndex. Other approaches to solving the katas are of course possible.

let addUsername = (list) => {
  let currentYear = new Date().getFullYear()
   list.forEach(eachPerson => eachPerson.username =
               (eachPerson.firstName + eachPerson.lastName[0]).toLowerCase() +
                 parseInt(currentYear - eachPerson.age));
  return list;
}
