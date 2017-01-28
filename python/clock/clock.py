# class Clock():

#     def __init__(self, hours, minutes):
#         self.total_min = hours*60 + minutes
#         ans_mins = self.total_min % 60
        
#     def add (self, more):

#         # ans_mins = minutes % 60

        # tmp_hours1 = int(math.floor(minutes/60)) + hours

        # ans_hours = tmp_hours1 % 24

        # if ans_hours < 10 and ans_mins < 10 :
        #     print '%02d:%02d' % (ans_hours, ans_mins)
        #     return '0%d:0%d' % (ans_hours, ans_mins)
        
        # if ans_hours < 10 and ans_mins >= 10 :
        #     print '0%d:%d' % (ans_hours, ans_mins)
        #     return '0%d:%d' % (ans_hours, ans_mins)
        
        # if ans_hours >= 10 and ans_mins < 10 :
        #     print '%d:0%d' % (ans_hours, ans_mins)
        #     return '%d:0%d' % (ans_hours, ans_mins)
        
        # if ans_hours >= 10 and ans_mins >= 10 :
        #     print '%d:%d' % (ans_hours, ans_mins)
        #     return '%d:%d' % (ans_hours, ans_mins)


class Clock:

    def __init__(self, hours, minutes):
        self.__hours = (hours + (minutes // 60)) % 24
        self.__minutes = minutes % 60
        self.__normalize()

    def __str__(self):
        return "%02d:%02d" % (self.__hours, self.__minutes)

    def __eq__(self, other):
        return self.__hours == other.__hours and self.__minutes == other.__minutes

    def __normalize(self):
        self.__hours = (self.__hours + (self.__minutes // 60)) % 24
        self.__minutes = self.__minutes % 60
    
    def add(self, delta):
        return Clock(self.__hours, self.__minutes + delta)
