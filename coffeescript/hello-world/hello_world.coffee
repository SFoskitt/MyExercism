class HelloWorld 
    hello = (arg) ->
        if !arg.length
            "Hello, World!"
        else
            "Hello, " + arg + "!"

module.exports = HelloWorld;