frontend-design-assets
======================

Frontend Design Assets

These HTML cover pages are being restructured in Sass files for easier CSS styling. 
I am using Compass (http://compass-style.org/reference/compass/) to compile the CSS from SASS but we should eventually write Node.js to compile the CSS since we are going to be 
using it to compile other things. 

See the Compass configuration file (compass.rb):

http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"

Compass has the option of compiling the CSS in standard, compact, and compressed versions, I will be using compact CSS here, but we would obviously ship it compressed. 
