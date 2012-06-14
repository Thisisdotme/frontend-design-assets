/* 
 * Original code from http://forrst.com/posts/jquery_plugin_to_resize_text_to_fit_a_specific_w-1L3
 * Slightly modified by P.J. Onori
*/

function resizer() {
    this.resize = function(element, size) {
        this.init(element);
        element.css('font-size', this.growTo(size) + 'px');
        element.addClass('resized');
        this.tester.remove();
    }

    this.init = function(element) {
        $('#resizeroo').remove();
        this.tester = element.clone();
        this.tester.css('display', 'none');
        this.tester.css('position', 'absolute');
        this.tester.css('height', 'auto');
        this.tester.css('width', 'auto');
        $('body').append(this.tester);
        this.size = 1;
        this.tester.css('font-size', this.size + 'px');
    }

    this.emitWidth = function() {
        console.log(this.tester.width());
    }

    this.grow = function() {
        this.size++;
        this.setSize();
    }

    this.setSize = function(size) {
        this.size = size;
        this.tester.css('font-size', this.size + 'px');
    }

    this.growTo = function(limit) {
        var lower = 1;
        var upper = limit-1;

        // do binary search going midway to determine 
        // the best size
        w =0
        while( lower < upper ) {
            
            midpoint = (upper+lower)/2;
            this.setSize(midpoint);
            w = this.tester.width()
            if( Math.abs(limit - w) <= 1) {
                // close enough
                break
            }

            if(w >= limit) {
                upper = this.size-1;
            }
            else {
                lower = this.size+1;
            }       
        }

        while(this.tester.width() > limit) {
            this.setSize(this.size-1);
        }
        return(this.size);

    }
}


(function( $ ){
  $.fn.textresizer = function( options ) {  
      return this.each(function() {       
          var settings = {
              'width' : 500
          };      
          if ( options ) { 
              $.extend( settings, options );
          }
          r = new resizer();
          r.resize($(this), settings.width);
          var context=this;
          
      });
  };
})( jQuery );