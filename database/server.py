from redis import Redis as red
from pottery import RedisDict as redDict
from pottery import RedisSet as redSet
from pottery import RedisList as redList
from pottery import NextId

#connection with redis-py client 
dir_con = red(host = '13.126.191.137',port = 6379,db = 0, password = 'dKoO2KDuqSrD')
#connection with pottery client 
pot_con = red.from_url('redis://:dKoO2KDuqSrD@13.126.191.137:6379/')

rest_ids = NextId(key='rest-ids', masters={pot_con})

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
#/addUser
def addUser(body):
	key = "user:"+str(body['id'])+":details"
	user = redDict(redis = pot_con, key = key)
	for key in body:
		user[key] = body[key] 

#d = {'id':23,"name":"nihal"}
#addUser(d)

#/updateUser
def updateUser(body):
	key = "user"+str(body["id"])+":details"
	user = redDict(redis = pot_con, key = key)
	for key in body:
		if key != 'id':
			user[key] = body[key]

#selectOffer




'''
Restaurant: pottery dictionary
-name
-restId(primaryKey and artificial key)
-active offer list
-phone no list
-delivery Radius
-extra dets
'''

def addRestaurant(body):
	rest_id = next(rest_ids)
	key = "rest:"+str(rest_id)+":details"
	rest = redDict(redis = pot_con, key = key)
	for key in body:
		rest[key] = body[key]

def updateRestaurant(body):
	key = "rest:"+str(body["id"])+":details"
	rest = redDict(redis = pot_con, key = key)
	for key in body:
		rest[key] = body[key]


'''
Offers
-id
-restId
-qty_left
-qty_sold
-accompaniments
-dishName
-originalPrice
-offerPrice
'''

def addOffer(body):

def claimOffer(body):


'''
Orders
-orderId
-OfferId
-usrId
-qty
-accompanyments
-status
-delivery boi
-

'''