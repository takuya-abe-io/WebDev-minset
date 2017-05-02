
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 */
 //  type  ``npm install browser-sync``
 //  type  ``browser-sync start --config bs-config.js``

module.exports = {
    "files": ["./httpdocs/*.html","./httpdocs/**/*.html","./httpdocs/**/*.css","./httpdocs/**/*.js"],
    server: {
        baseDir: "httpdocs",
    },
    "startPath":"index.html",
    "proxy": false,
    "port": 3000,
    "xip": true,
    "notify": true,
    "minify": true,
};
