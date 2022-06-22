#!/bin/bash

set -e # exit on error

make_folder() {
    if [ ! -d $WORKSPACE/$TRACK ]; then
        echo "Exercism track $TRACK not found in $WORKSPACE"
        mkdir -p $WORKSPACE/$TRACK
    fi
}

get_execise() {
    curl https://exercism.org/api/v2/tracks/$TRACK/exercises > /tmp/exercism
}

get_slugs() {
    cat /tmp/exercism | jq '.[][] | .slug' > /tmp/exercism
}

set_slugs() {
    mv /tmp/exercism $WORKSPACE/$TRACK/slugs.json
}

not_found() {
    echo "Track $TRACK not found"
    exit 1
}

if [ -z "$1" ]; then
    echo "Usage: bash fetch.sh <track> [exercise slug | next]"
    echo "track (required): the track to fetch"
    echo "one of the following (optional):"
    echo "exercise slug: the slug of the exercise to fetch"
    echo "(WIP) next: fetch the next exercise"
    exit 1
fi

TRACK=$1
EXERCISE=$2

WORKSPACE=$(exercism workspace)

get_execise

get_slugs || not_found

make_folder

set_slugs
