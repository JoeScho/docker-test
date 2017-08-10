function removeContainer {
  docker-compose down
  docker rmi joescho/dockertest
}

removeContainer
docker-compose run --rm docker-test npm test
removeContainer
