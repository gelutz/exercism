#!/bin/bash
TRACK=$1
WORKSPACE=$(exercism workspace)

if [ ! -d $WORKSPACE/$TRACK ]; then
	echo "Exercism track $TRACK not found in $WORKSPACE"
  	mkdir -p $WORKSPACE/$TRACK
fi

curl https://exercism.org/api/v2/tracks/$TRACK/exercises > /tmp/exercism
cat /tmp/exercism | jq '.[][] | .slug' > $WORKSPACE/$TRACK/slugs.json
