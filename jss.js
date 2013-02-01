/**
 * Created by PyCharm.
 * User: akira
 * Date: 1/31/13
 * Time: 9:03 PM
 * To change this template use File | Settings | File Templates.
 */
var JSS = { properties: [] };

$(document).ready(function() {
  $.each($('link[rel=smartsheet]'), function(el, val){
    $.get(val.href, function(data) {

      var lines = data.match(/[^\r\n]+/g);
      var lastSelector = '';

      $.each(lines, function(el, val){
        if (val.search('{') != -1){
          lastSelector = val.replace('{', '').trim();
        } else {
          var prop = val.split(":");
          if (prop.length > 1){
            JSS.properties.push( new JSS.Property( lastSelector, prop[0].trim(), prop[1].replace(';','').trim() ) );
          }
        }
      });
      $.each(JSS.properties, function(el, val){
        val.apply();
      });
    });
  });
});

$(window).resize(function() {
  $.each(JSS.properties, function(el, val){
    val.apply();
  });
});

JSS.Property = function( selector, property, value ) {
  this.selector = selector;
  this.property = property;
  this.value = value;

  this.apply = function() {

    var expression = this.value.match(/\[(.*?)\]/);
    if (expression){
      var newExpression = expression[1].replace('$height', 'document.documentElement.clientHeight');
      newExpression = newExpression.replace('$width', 'document.documentElement.clientWidth');
      $(this.selector).css(this.property, this.value.replace( expression[0], eval(newExpression) ) );
    } else {
      $(this.selector).css(this.property, this.value);
      console.log(this.selector, this.property, this.value);
    }
    //console.log(value, "replaced", expression[0], eval(expression[1]));
  };

};