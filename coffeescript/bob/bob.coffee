class Bob
    hey: (arg) ->
        if arg?
            if arg[arg.length-1] == '!'
               "Whoa, chill out!"
            else if arg[arg.length-1] == '?'
                "Sure."
            else
                @_whatever()
    
    _whatever: () ->
        # console.log "whatever is called"
        "Whatever."

module.exports = Bob


###
THREE ways to define and access an internal method:

1.
define as:
    _whatever: () ->
access as:
    @_whatever()

2.
define as:
    _whatever = () ->
access as:
    _whatever()

3.
define as:
    whatever: () ->
access as:
    @whatever()

NOTE: in first and second instance, the underscore is strictly convention, not necessary - removing underscore from both definition and call and this still works.  Third instance proves this point.

###