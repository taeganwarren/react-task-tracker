build-react:
	cd client; npm run build

build-docker:
	cd server; docker build -t react-task-tracker .

up:
	docker-compose up