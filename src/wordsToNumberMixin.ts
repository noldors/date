import { WordToNumberRepresentation } from './WordToNumberRepresentation'

const units = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  twentyOne: 21,
  twentyTwo: 22,
  twentyThree: 23,
  twentyFour: 24,
  twentyFive: 25,
  twentySix: 26,
  twentySeven: 27,
  twentyEight: 28,
  twentyNine: 29,
  thirty: 30,
  thirtyOne: 31,
  thirtyTwo: 32,
  thirtyThree: 33,
  thirtyFour: 34,
  thirtyFive: 35,
  thirtySix: 36,
  thirtySeven: 37,
  thirtyEight: 38,
  thirtyNine: 39,
  forty: 40,
  fortyOne: 41,
  fortyTwo: 42,
  fortyThree: 43,
  fortyFour: 44,
  fortyFive: 45,
  fortySix: 46,
  fortySeven: 47,
  fortyEight: 48,
  fortyNine: 49,
  fifty: 50,
  fiftyOne: 51,
  fiftyTwo: 52,
  fiftyThree: 53,
  fiftyFour: 54,
  fiftyFive: 55,
  fiftySix: 56,
  fiftySeven: 57,
  fiftyEight: 58,
  fiftyNine: 59,
  sixty: 60,
  sixtyOne: 61,
  sixtyTwo: 62,
  sixtyThree: 63,
  sixtyFour: 64,
  sixtyFive: 65,
  sixtySix: 66,
  sixtySeven: 67,
  sixtyEight: 68,
  sixtyNine: 69,
  seventy: 70,
  seventyOne: 71,
  seventyTwo: 72,
  seventyThree: 73,
  seventyFour: 74,
  seventyFive: 75,
  seventySix: 76,
  seventySeven: 77,
  seventyEight: 78,
  seventyNine: 79,
  eighty: 80,
  eightyOne: 81,
  eightyTwo: 82,
  eightyThree: 83,
  eightyFour: 84,
  eightyFive: 85,
  eightySix: 86,
  eightySeven: 87,
  eightyEight: 88,
  eightyNine: 89,
  ninety: 90,
  ninetyOne: 91,
  ninetyTwo: 92,
  ninetyThree: 93,
  ninetyFour: 94,
  ninetyFive: 95,
  ninetySix: 96,
  ninetySeven: 97,
  ninetyEight: 98,
  ninetyNine: 99,
  oneHundred: 100
}

export function wordsToNumberMixin (target: any) {
  for (const [method, num] of Object.entries(units)) {
    Object.defineProperty(target, method, {
      configurable: false,
      writable: false,
      get () {
        return new WordToNumberRepresentation(num)
      }
    })
  }
}
