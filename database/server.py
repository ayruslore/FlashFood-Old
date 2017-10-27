from redis import Redis as red
from pottery import RedisDict as redDict
from pottery import RedisSet as redSet
from pottery import RedisList as redList
from pottery import NextId

#connection with redis-py client 
dir_con = red(host = '13.126.191.137',port = 6379,db = 0, password = 'dKoO2KDuqSrD')
#connection with pottery client 
pot_con = red.from_url('redis://:dKoO2KDuqSrD@13.126.191.137:6379/')

#string encode with b prefix
def bytify(strung):
	return bytes(strung, encoding = "ascii")

def byte2string(strung):
	return strung.decode('utf-8')

def byte2int(strung):
	return int(byte2string(strung))

def byte2float(strung):
	return float(byte2string(strung))

'''
User: pottery dictionary
-name
-userId(primaryKeycebook facebook generated)
-phone no
-lat
-long
-decoded address
-active order list
-bool subscribed
-list of blacklisted restaurants
'''
def addUser(body):
	key = "user:"+str(body['id'])+":details"
	user = redDict(redis = pot_con, key = key)
	user['name']=body['name']
	user['lat']=body['lat']
	user['long']=body['long']
	user['subscribed']=body['subscribed']
	user[]=body[] 

d = {'id':23,"name":"nihal"}

#addUser(d)

'''
Restaurant: pottery dictionary
-name
-restId(primaryKey and artificial key)
-active offer list
-phone no list
-delivery Radius
-extra dets
'''











