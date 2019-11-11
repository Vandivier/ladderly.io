# ladderly.io

Web client for http://ladderly.io/

## Installation

Developer installation is the typical `npm install` then `npm start`.

Run time assumes LAMP WP install. Run `npm build` then drop the contents of `ui/dist` into your public html folder.

`.htaccess` should be overwritten so that `mysite.com/wp[.]*` is respected by WP, and Angular controls the rest.

## Misc Notes

1. Currently targeting [Angular Material](https://material.angular.io/guide/theming).
   1. https://material.angular.io/
   2. https://www.primefaces.org/primeng/#/
   3. https://ionicons.com/
   4. https://github.com/akveo/ngx-admin
2. Login at `mysite.com/wp-admin`
