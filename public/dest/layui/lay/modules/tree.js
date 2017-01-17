/*! myblog - v1.0.0 - 2017-01-02 */layui.define("jquery",function(a){"use strict";var b=layui.jquery,c=layui.hint(),d="layui-tree-enter",e=function(a){this.options=a},f={arrow:["&#xe623;","&#xe625;"],checkbox:["&#xe626;","&#xe627;"],radio:["&#xe62b;","&#xe62a;"],branch:["&#xe622;","&#xe624;"],leaf:"&#xe621;"};e.prototype.init=function(a){var b=this;a.addClass("layui-box layui-tree"),b.options.skin&&a.addClass("layui-tree-skin-"+b.options.skin),b.tree(a),b.on(a)},e.prototype.tree=function(a,c){var d=this,e=d.options,g=c||e.nodes;layui.each(g,function(c,g){var h=g.children&&g.children.length>0,i=b('<ul class="'+(g.spread?"layui-show":"")+'"></ul>'),j=b(["<li "+(g.spread?'data-spread="'+g.spread+'"':"")+">",function(){return h?'<i class="layui-icon layui-tree-spread">'+(g.spread?f.arrow[1]:f.arrow[0])+"</i>":""}(),function(){return e.check?'<i class="layui-icon layui-tree-check">'+("checkbox"===e.check?f.checkbox[0]:"radio"===e.check?f.radio[0]:"")+"</i>":""}(),function(){return'<a href="'+(g.href||"javascript:;")+'" '+(e.target&&g.href?'target="'+e.target+'"':"")+">"+('<i class="layui-icon layui-tree-'+(h?"branch":"leaf")+'">'+(h?g.spread?f.branch[1]:f.branch[0]:f.leaf)+"</i>")+("<cite>"+(g.name||"未命名")+"</cite></a>")}(),"</li>"].join(""));h&&(j.append(i),d.tree(i,g.children)),a.append(j),"function"==typeof e.click&&d.click(j,g),d.spread(j,g),e.drag&&d.drag(j,g)})},e.prototype.click=function(a,b){var c=this,d=c.options;a.children("a").on("click",function(a){layui.stope(a),d.click(b)})},e.prototype.spread=function(a,b){var c=this,d=(c.options,a.children(".layui-tree-spread")),e=a.children("ul"),g=a.children("a"),h=function(){a.data("spread")?(a.data("spread",null),e.removeClass("layui-show"),d.html(f.arrow[0]),g.find(".layui-icon").html(f.branch[0])):(a.data("spread",!0),e.addClass("layui-show"),d.html(f.arrow[1]),g.find(".layui-icon").html(f.branch[1]))};e[0]&&(d.on("click",h),g.on("dblclick",h))},e.prototype.on=function(a){var c=this,e=c.options,f="layui-tree-drag";a.find("i").on("selectstart",function(a){return!1}),e.drag&&b(document).on("mousemove",function(a){var d=c.move;if(d.from){var e=(d.to,b('<div class="layui-box '+f+'"></div>'));a.preventDefault(),b("."+f)[0]||b("body").append(e);var g=b("."+f)[0]?b("."+f):e;g.addClass("layui-show").html(d.from.elem.children("a").html()),g.css({left:a.pageX+10,top:a.pageY+10})}}).on("mouseup",function(){var a=c.move;a.from&&(a.from.elem.children("a").removeClass(d),a.to&&a.to.elem.children("a").removeClass(d),c.move={},b("."+f).remove())})},e.prototype.move={},e.prototype.drag=function(a,c){var e=this,f=(e.options,a.children("a")),g=function(){var f=b(this),g=e.move;g.from&&(g.to={item:c,elem:a},f.addClass(d))};f.on("mousedown",function(){var b=e.move;b.from={item:c,elem:a}}),f.on("mouseenter",g).on("mousemove",g).on("mouseleave",function(){var a=b(this),c=e.move;c.from&&(delete c.to,a.removeClass(d))})},a("tree",function(a){var d=new e(a=a||{}),f=b(a.elem);return f[0]?void d.init(f):c.error("layui.tree 没有找到"+a.elem+"元素")})});