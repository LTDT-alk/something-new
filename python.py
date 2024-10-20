from decimal import *
getcontext().prec = 3

def no(value):
    Decimal(value)

'''   "z-score"
zscore = []
def z_score(mean, sD, value):
    for x in value:
        score = x-mean
        score2 = no(score)/ no(sD)
        zscore.append(score2)
    print(f"zscore = {zscore}")


mean0 = float(80.2)
standard_divaition = float(4.0)
value0 = [float(82.0), float(85.6)]


z_score(mean0, standard_divaition, value0)

"""
currention = []
for z in zscore:
    currention.append(no(z) * no(standard_divaition) + no(mean0))
print(currention)
"""

'''


"Arithmatic mean"
datapoints = [1.1,2,3,4,5,6.9,7]
def mean(data):
    total = 0
    for point in data:
        total = no(total) + no(point)
    mean = no(total)/no(len(data))
    print(f"the mean is {mean} and the total is {total}")
    return mean

A_Mean = mean(datapoints)


currection = A_Mean * len(datapoints)
print(currection)

'''

'''

'''
"geometric mean"
