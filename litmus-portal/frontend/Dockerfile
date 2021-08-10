# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12.18.0 as react-build

# Add Maintainer Info
LABEL maintainer="LitmusChaos"

ARG TARGETOS=linux
ARG TARGETARCH
ARG REACT_APP_KB_CHAOS_VERSION
ARG REACT_APP_BUILD_TIME
ARG REACT_APP_HUB_BRANCH_NAME

WORKDIR /frontend/build

COPY build .

FROM nginxinc/nginx-unprivileged:1.18-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY  --from=react-build /frontend/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
