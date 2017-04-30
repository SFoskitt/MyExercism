Array.prototype.accumulate = (accumulator) ->
    ans = []
    for ele in this
        ans.push accumulator(ele)
    return ans
