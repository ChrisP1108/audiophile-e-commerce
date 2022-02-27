#!/usr/bin/env sh

# abort on errors
set -e

# npm run build

# navigate into the build output directory

git add dist && git commit -m 'adding dist subtree'

git subtree push --prefix dist origin gh-pages
