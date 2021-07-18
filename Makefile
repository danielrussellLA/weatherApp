
DOCKER_CONTAINER_NAME ?= weather_app
DOCKER_TAG ?= latest
RUN_ENV ?= dev

.PHONY: build run login logs stop interactive

build:
	npm run build
	docker build -t ${DOCKER_CONTAINER_NAME}:${DOCKER_TAG} .

run:
	docker run --name ${DOCKER_CONTAINER_NAME} -d -p 3000:3000 -e RUN_ENV=${RUN_ENV} ${DOCKER_CONTAINER_NAME}:${DOCKER_TAG}