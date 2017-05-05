class HelloWorld 
    hello: (arg) ->
        if arg?
            "Hello, there " + arg + "!"
        else
            "Hello, World!"

module.exports = HelloWorld;

# another meaningless change