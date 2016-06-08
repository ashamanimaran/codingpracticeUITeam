to use sass from command line you have to first install ruby
then install sass.........
gem install sass
scss input.scss output.css
---------------------------
to use compass mixins in sassInstall the library 
bower install compass-sass-mixins
Import the compass into your SASS file 
@import "bower_components/compass-sass-mixins/lib/compass"
Checkout SASS function list 
https://github.com/askucher/compass-sass-mixins


or
npm install compass-sass-mixins
Import the compass into your SASS file 
@import "node_modules/compass-sass-mixins/lib/compass";

---------------------------------------

otherwise use gulp or grunt to compile scss to css
npm install gulp --save
npm install gulp-sass --save

-------------------------------
you can use if, for, while in a mixin in sass
looping in less is not easy
Instead, it provides guarded mixins (mixin when a parameter exists or equals / is inferior / is superior
 to something). So basically, I had to do something like this:
/* Define loop */
.loop(@index) when (@index &gt; 0) {
  do something.....
  /* Call itself */
  .loop(@index - 1);
}

/* Stop loop */
.loop (0) {}

-------------------------------
For the most part, the math is similar, but there are some weirdnesses with how units are handled.
 For instance, LESS will assume the first unit you use is what you want out, ignoring further units.

div {
   width: 100px + 2em; // == 102px (weird)
}
In Sass, you get a clear error: Incompatible units: 'em' and 'px'. 
I guess it's debatable if it's better to error or be wrong, but I'd personally rather have the error.

-------------------------------


Working with Media Queries

The way most of us started working with @media queries was adding blocks of them at the bottom of your main stylesheet. That works, but it leads to mental disconnect between the original styling and the responsive styles. Like:

.some-class {
   /* Default styling */
}

/* Hundreds of lines of CSS */

@media (max-width: 800px) {
  .some-class {
    /* Responsive styles */
  }
}
With Sass or LESS, we can bring those styles together through nesting.

.some-class {
  /* Default styling */
  @media (max-width: 800px) {
    /* Responsive styles */
  }
}