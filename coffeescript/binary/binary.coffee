class Binary
    constructor: (str) ->
        this.str = str
    toDecimal: () ->
        arr = this.str.split('').reverse()
        ans = 0
        multiplier = 1
        for elem in arr
            num = parseInt(elem, 10)
            if num in [0, 1]
                ans += num * multiplier
                multiplier = multiplier * 2
        return ans

module.exports = Binary