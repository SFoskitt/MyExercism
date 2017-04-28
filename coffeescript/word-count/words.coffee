class Words
    constructor: (args) ->
        @_args = args

    count: () ->
        console.log('its the count plus', @_args)
        dict = {}
        arr = @_args.split(' ')
        arr.forEach (ele) ->
            dict[ele] += 1
        return dict
        
module.exports = Words