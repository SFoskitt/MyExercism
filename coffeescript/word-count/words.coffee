class Words
<<<<<<< HEAD
    constructor: (args) ->
        @_args = args

    count: () ->
        console.log('its the count plus', @_args)
        dict = {}
        arr = @_args.split(' ')
        arr.forEach (ele) ->
            dict[ele] += 1
        return dict
        
=======
    constructor: (arg) ->
        @cleaned = @cleanString(arg)
        console.log('@cleaned', @cleaned);
        
    count: () ->
        dict = {}
        @cleaned.forEach (elem) -> 
            if dict[elem]?
                dict[elem] += 1
            else 
                dict[elem] = 1
        return dict

    cleanString: (dirty) ->
        # lowercase 
        dirty = dirty.toLowerCase()
        # strip punctuation
        # @args = @args.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
        return dirty.match(/[^_\W]+/g)


>>>>>>> 51c69f201f9e9ce93ea586c2016a7ab3e98fb223
module.exports = Words