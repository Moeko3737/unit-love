#!/bin/zsh

cd -- "$(dirname -- "$0")" || exit 1

exec node server.js
