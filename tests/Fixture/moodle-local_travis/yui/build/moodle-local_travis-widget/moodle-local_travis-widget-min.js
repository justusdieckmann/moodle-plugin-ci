YUI.add("moodle-local_travis-widget",function(e,t){function i(){i.superclass.constructor.apply(this,arguments)}i.NAME="moodle-local_travis-widget",i.ATTRS={contextId:{value:undefined}},e.extend(i,e.Base,{initializer:function(){e.delegate("click",this.handle_click,document,".local_travis .widget",this)},handle_click:function(e){e.preventDefault()}}),M.local_travis.Widget=i,M.local_travis.init_widget=function(e){new i(e)}},"@VERSION@",{requires:["base","node","event"]});