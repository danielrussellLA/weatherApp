
DOCKER_CONTAINER_NAME ?= weather_app
DOCKER_TAG ?= latest
RUN_ENV ?= dev

.PHONY: build run stop rm clean

build: node_modules
	DOCKER_BUILDKIT=1 docker build -t ${DOCKER_CONTAINER_NAME}:${DOCKER_TAG} .

run:
	docker run -e AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} -e AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} --name ${DOCKER_CONTAINER_NAME} -d -p 3000:3000 -e RUN_ENV=${RUN_ENV} ${DOCKER_CONTAINER_NAME}:${DOCKER_TAG}

stop:
	docker stop ${DOCKER_CONTAINER_NAME}

rm:
	docker rm ${DOCKER_CONTAINER_NAME}

clean:
	rm -rf node_modules build server-build

node_modules:
	npm i
