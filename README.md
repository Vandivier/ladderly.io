# ladderly.io

Web client for http://ladderly.io/

## Installation

Developer installation is the typical `npm install` then `npm start`.

Run time assumes LAMP WP install. Run `npm build` then drop `ui/dist` folder content into your public html folder.

`.htaccess` should be overwritten so that `mysite.com/wp[.]*` and `mysite.com/admin[.]*` are respected by WP, and Angular controls the rest.

## Misc Notes

1. Currently targeting [Angular Material](https://material.angular.io/guide/theming).
