#! /bin/bash
git clone $BOOK_URL
gitbook install
nohup gitbook serve &
node server.js

