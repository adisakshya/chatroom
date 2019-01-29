import socket

def main():

	try:

		s = socket.socket()
		host = socket.gethostname()
		port = 1234
		s.connect((host, port))
		print('From server: ', s.recv(1024).decode('utf-8'))
		s.close()

	except KeyboardInterrupt:

		exit(0)

	except Exception as error:

		print('Caught error: ' + repr(error))
			
if __name__ == '__main__':
	main()
