class HelloWorld 
    hello: (arg) ->
        if arg?
            "Hello, " + arg + "!"
        else
            "Hello, World!"

module.exports = HelloWorld;