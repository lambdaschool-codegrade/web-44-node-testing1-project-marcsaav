const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    let input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const newObj = utils.trimProperties(input)
    expect(input).toBe(input)
    expect(newObj).not.toBe(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    let input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  // test('[4] the object returned is the exact same one we passed in', () => {
  //   let input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  //   let actual = utils.trimPropertiesMutation(input)
  //   expect(actual).toEqual(input)
  // })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [ {integer: 2}, {integer: 6}, {integer: 8}, {integer: 5}]
    const largestNumber = utils.findLargestInteger(input)
    expect(8).toBe(largestNumber)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const number = counter.countDown()
    expect(number).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const number = counter.countDown()
    expect(number).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    const number = counter.countDown()
    expect(number).toBe(0)
    const actual = counter.countDown()
    expect(actual).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const actual = seasons.next()
    expect(actual).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const actual = seasons.next()
    expect(actual).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    expect(actual).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    expect(actual).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    expect(actual).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    let actual = seasons.next()
    expect(actual).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const first = focus.drive(100)
    expect(first).toBe(100)
    const second = focus.drive(100)
    expect(second).toBe(200)
  })
  test('[16] driving the car uses gas', () => {
    const gas = focus.tank
    focus.drive(100)
    expect(focus.tank).toBeLessThan(gas)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(100)
    focus.drive(100)
    focus.drive(100)
    focus.drive(200)
    const actual = focus.drive(200)
    expect(actual).toBe(600)
    focus.refuel(5)
    expect(focus.drive(1)).not.toBe(600)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tank).toBe(20)
    focus.refuel(2)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const bool = await utils.isEvenNumberAsync(2)
    expect(bool).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const bool = await utils.isEvenNumberAsync(7)
    expect(bool).toBe(false)
  })
})
