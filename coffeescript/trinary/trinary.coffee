class Trinary
    constructor: (str) ->
        this.str = str
    toDecimal: () ->
        arr = this.str.split('').reverse()
        ans = 0
        multiplier = 1
        for elem in arr
            tmp = parseInt(elem, 10)
            if tmp in [0, 1, 2]
                ans += tmp * multiplier
                multiplier = multiplier * 3
        return ans

module.exports = Trinary