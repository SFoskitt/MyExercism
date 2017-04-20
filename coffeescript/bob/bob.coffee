class Bob
    hey: (arg) ->
        if arg?
            # shouting
            if arg.toUpperCase() == arg
                "Whoa, chill out!"

            # questions
            else if arg[arg.length-1] == '?'
                "Sure."            

            #talking forcefully
            else if arg[arg.length-1] == '!'
                @_whatever()

            # forceful questions
            else if arg[arg.length-1] == '?' and arg.toUpperCase() == arg
                "Whoa, chill out!"

            # anything else
            else
                @_whatever()
    
    _whatever: () ->
        "Whatever."

    # consider internal methods for testing all caps and testing last char

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