import random
import json
data={}
data['coins']={}
for i in range(100):
    data['coins'][random.randint(1,3000)]=random.randint(0,50)
with open('data.json','w') as outfile:
    json.dump(data,outfile,indent=4)