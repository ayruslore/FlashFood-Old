import bottle
from bottle import get, post, request, run, install, response  # or route
from gevent import monkey; monkey.patch_all()

from redis import Redis as red
from pottery import RedisDict as redDict
from pottery import RedisSet as redSet
from pottery import RedisList as redList
from pottery import NextId

#Enable Cors to send/recieve data.
class EnableCors(object):
    name = 'enable_cors'
    api = 2

    def apply(self, fn, context):
        def _enable_cors(*args, **kwargs):
            # set CORS headers
            response.headers['Access-Control-Allow-Origin'] = '*'
            response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
            response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

            if bottle.request.method != 'OPTIONS':
                # actual request; reply with the actual response
                return fn(*args, **kwargs)

        return _enable_cors


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

@post('/adduser')  #post request to add the user details.
def addUser():
    body = request.json
    key = "user:" + str(body['id']) + ":details"
    user = redDict(redis = pot_con, key = key)
    for key in body:
        user[key] = body[key]

#d = {'id':23,"name":"nihal"}
#addUser(d)

#/updateUser
@post('/updateuser')
def updateUser():
    body = request.json
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
@post('/addrest')
def addRestaurant():
    body = request.json
	rest_id = next(rest_ids)
	key = "rest:"+str(rest_id)+":details"
	rest = redDict(redis = pot_con, key = key)
	for key in body:
		rest[key] = body[key]

@post('/updaterest')
def updateRestaurant():
    body = request.json
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

'''
def addOffer(body):

def claimOffer(body):
'''

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

install(EnableCors())
run(host='0.0.0.0', port=3000, debug=True, server='gevent')
