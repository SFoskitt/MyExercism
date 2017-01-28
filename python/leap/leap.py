def is_leap_year(year):
    if year % 4 == 0 and year % 100 != 0 :
        return True
    
    if year % 400 == 0 :
        return True

    return False


    #     if ((year modulo 4 is 0) and (year modulo 100 is not 0))
    # or (year modulo 400 is 0)
    #     then true
    # else false