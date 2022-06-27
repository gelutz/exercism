#!/bin/bash

set -e # exit on error

make_folder() {
    if [ ! -d $WORKSPACE/$TRACK ]; then
        echo "Exercism track $TRACK not found in $WORKSPACE, so I'll make one."
        mkdir -p $WORKSPACE/$TRACK
    fi
}

get_execise() {
    curl https://exercism.org/api/v2/tracks/$TRACK/exercises > /tmp/exercism
}

get_slugs() {
    cat /tmp/exercism | jq '.[][] | .slug' > /tmp/exercism
    mv /tmp/exercism $WORKSPACE/$TRACK/slugs.json
}

not_found() {
    echo "Track $TRACK not found"
    exit 1
}

fetch_specific() {
    exercism download --exercise=$EXERCISE --track=$TRACK
}

if [[ "$1" == "--help" || "$1" == "-h" || -z "$1" ]]; then
    echo "Usage:"
    echo "    fetch [<track>] [<exercise slug | next>]"
    echo ""
    echo "Description:"
    echo "    Fetch a specific exercise or the next one from the track."
    echo "    If no exercise is selected the script will create"
    echo "    a JSON file with every slug from that track."
    echo ""
    echo "Options:"
    echo "    <track>: the track you're working on"
    echo "    <exercise slug>: the slug of the exercise to fetch"
    echo "    (WIP) <next>: fetch the next exercise"
    echo ""
    echo "Extra options:"
    echo "    -h | --help: show this message"
    exit 1
fi

TRACK=$1
EXERCISE=$2

WORKSPACE=$(exercism workspace)

if [[ $EXERCISE != "next" ]]; then
    get_execise
    
    get_slugs || not_found
    
    make_folder
    
    fetch_specific
fi

if [[ $EXERCISE == "next" ]]; then
    get_execise
    
    get_slugs || not_found
    
    make_folder

    FOUND=$(ls ./$TRACK)

    for e in "${FOUND[@]}"
    do

        if [ ! -f ./$TRACK/slugs.json]; then
            
            get_json_array | jq -c '.[]' | while read object; do
            api_call "$object"
        done
        echo "$i"
        # or do whatever with individual element of the array
    done


fi