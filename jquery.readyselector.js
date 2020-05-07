(function ($) {
  var ready = $.fn.ready;
  $.fn.ready = function (fn) {
    var container = $('.action_name.controller_name');
    
    if (container.length == 0) {
      // The $().ready(fn) case.
      ready(fn);
    } else if (this.selector) {
      ready($.proxy(function(){
        $(this.selector, this.context).each(fn);
      }, this));
    } else {
      ready($.proxy(function(){
        $(this).each(fn);
      }, this));
    }
  }
})(jQuery);
