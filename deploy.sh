#!/usr/bin/env sh

set -env
npm run build

cd dist

git init
git add -A
git commit -m "new deployment"
git push -f git@github.com:egorkafm/vue-todos.git master:gh-pages

cd -