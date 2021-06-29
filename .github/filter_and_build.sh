#!/bin/bash
set -e 

working_dir="litmus-portal"

declare -A MYMAP=( [frontend]="litmusportal-frontend:ci" [graphql-server]="litmusportal-server:ci" [authentication]="litmusportal-auth-server:ci" )

# Building the images on the basic of changes in paths and saving the tar versions into Images directory
current_dir=$(echo "$working_dir/$directory")
mkdir Images
DOCKER_BUILDKIT=1 docker build $current_dir -t litmuschaos/${MYMAP[$directory]} -f $working_dir/${directory}/Dockerfile
docker save "litmuschaos/${MYMAP[$directory]}" > Images/${directory}.tar