var ghpages = require('gh-pages');
ghpages.publish('dist', {nojekyll: true});

//previous CLI deploy command, didn't seem to have a flag for nojekyll
// "deploy": "gh-pages -d dist",