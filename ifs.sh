#!/bin/bash

branch1=develop
branch2=develop
branch3=develop

if [ "$branch1" = "develop" ] && [ "$branch2" = "develop" ] && [ "$branch3" = "develop2" ]; then
    echo "it is"
else
    echo "it's not"
fi