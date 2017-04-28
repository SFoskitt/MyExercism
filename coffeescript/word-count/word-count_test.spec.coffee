Words = require "./words"

describe "Words", ->
  it "counts one word", ->
    words = new Words "word"
    expect(words.count()).toEqual
      word: 1

  it "counts one of each", ->
    words = new Words "one of each"
    expect(words.count()).toEqual
      one: 1
      of: 1
      each: 1

  it "counts multiple occurrences", ->
    words = new Words "one fish two fish red fish blue fish"
    expect(words.count()).toEqual
      one: 1
      fish: 4
      two: 1
      red: 1
      blue: 1

<<<<<<< HEAD
  xit "ignores punctuation", ->
=======
  it "ignores punctuation", ->
>>>>>>> 51c69f201f9e9ce93ea586c2016a7ab3e98fb223
    words = new Words "car : carpet as java : javascript!!&@$%^&"
    expect(words.count()).toEqual
      car: 1
      carpet: 1
      as: 1
      java: 1
      javascript: 1

<<<<<<< HEAD
  xit "includes numbers", ->
=======
  it "includes numbers", ->
>>>>>>> 51c69f201f9e9ce93ea586c2016a7ab3e98fb223
    words = new Words "testing, 1, 2 testing"
    expect(words.count()).toEqual
      testing: 2
      1: 1
      2: 1

<<<<<<< HEAD
  xit "normalizes case", ->
=======
  it "normalizes case", ->
>>>>>>> 51c69f201f9e9ce93ea586c2016a7ab3e98fb223
    words = new Words "go Go GO"
    expect(words.count()).toEqual
      go: 3
