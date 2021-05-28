#!/bin/bash

read -p "Enter git message: " message
git add .
git commit -m "$message"
git push -u origin master