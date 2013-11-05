;(function ( $, window, document, undefined ) {
    
    $.fn.toBlock = function (options) {
        
        if(this.length > 1){
            throw "jQuery.toBlock does not support selecting multiple elements";
        }
        
        return WebBlocks.Blocks.makeBlock(this.first(), options);
        
    }

})( jQuery, window, document );