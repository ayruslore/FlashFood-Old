from redis import Redis as red
from pottery import RedisDict as redDict
from pottery import RedisSet as redSet
from pottery import RedisList as redList
from pottery import NextId

#connection with redis-py client 
dir_con = red(host = 'localhost',port = 6379,db = 0)
#connection with pottery client 
pot_con = red.from_url('http://localhost:6379/')

#string encode with b prefix
def bytify(strung):
	return bytes(strung, encoding = "ascii")

def byte2string(strung):
	return strung.decode('utf-8')

def byte2int(strung):
	return int(byte2string(strung))

def byte2float(strung):
	return float(byte2string(strung))










