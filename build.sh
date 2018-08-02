#!/usr/bin/env bash
docker-compose -f docker-compose-build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/foto-nginx/build && \
cp -r services/react/build/client services/foto-nginx/build && \
docker build -t trzl/portfolio:foto-react.1 -f ./services/foto-nginx/build.Dockerfile ./services/foto-nginx && \
# docker push trzl/portfolio:foto-react.1 && \
docker build -t trzl/portfolio:foto-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
# docker push trzl/portfolio:foto-proxy.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/foto-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"