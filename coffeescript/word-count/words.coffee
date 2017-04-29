class Words
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

module.exports = Words