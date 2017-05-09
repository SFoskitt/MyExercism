class Anagram
    constructor: (word) ->
        this.word = word

    match: (arr) ->
        ans = []
        compare = this.word.toLowerCase().split('').sort().join('')
        for elem in arr
            tmp = elem.toLowerCase()
            if tmp != this.word.toLowerCase()
                test = tmp.split('').sort().join('')
                if test == compare 
                    ans.push(tmp)
        return ans
        
module.exports = Anagram