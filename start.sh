#! /bin/bash
rm -rf book
git clone $BOOK_URL book
cd book

gitbook install
nohup gitbook serve &
node server.js

