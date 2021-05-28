#!/bin/bash

read -p "Enter git message: " message
echo "git adding"
git add .
echo "git comitting. message:" $message
git commit -m "$message"
echo "pushing"
git push -u origin master