#
# Skeleton file for the Python "Hello World" exercise.
#


def hello(name=''):
    print 'My Name Is ', name
    if name == '' or name == None:
        return 'Hello, World!'
    else:
        ans = 'Hello, %s!' % name
        return ans
