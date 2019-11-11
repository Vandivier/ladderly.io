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
   5. https://mdbootstrap.com/docs/angular/components/demo/#!
   6. https://coolbackgrounds.io/
   7. https://coolors.co/app
   8. http://colormind.io/
   9. https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF
2. Login at `mysite.com/wp-admin`
3. Flip cards https://akveo.github.io/nebular/docs/components/flip-card/overview#nbflipcardcomponent
4. I want the style to be like nerdwallet, but my five cards will be:
   1. Get a Job
   2. Pick a School
   3. Upskill in my current role (could be rolled into get a job as grow income, etc)
   4. long term: invest intelligently (real estate, tax stuff...)
   5. Give back (effective altruism, moral life, what to do once money isn't a problem)
