import socket
import sys

def main():

	try:
		s = socket.socket()
		host = socket.gethostname()
		port = 1234
		s.bind((host, port))
		s.listen(5)

		while True:
			print('Waiting for connecion...')
			c, addr = s.accept()
			print('Got connection from IP: ', addr)
			reply = input('enter reply ')
			c.send(reply.encode('utf-8'))
		
		s.close()	

	except KeyboardInterrupt:

		sys.exit(0)

	except Exception as error:

		print('Caught Error: ' + repr(error))	

if __name__ == '__main__':
	main()
