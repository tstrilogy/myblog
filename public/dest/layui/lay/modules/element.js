/*! myblog - v1.0.0 - 2017-01-02 */layui.define("jquery",function(a){"use strict";var b=layui.jquery,c=(layui.hint(),layui.device()),d="element",e="layui-this",f="layui-show",g=function(){this.config={}};g.prototype.set=function(a){var c=this;return b.extend(!0,c.config,a),c},g.prototype.on=function(a,b){return layui.onevent(d,a,b)},g.prototype.tabAdd=function(a,c){var d=b(".layui-tab[lay-filter="+a+"]"),e=d.children(".layui-tab-title"),f=d.children(".layui-tab-content");return e.append("<li>"+(c.title||"unnaming")+"</li>"),f.append('<div class="layui-tab-item">'+(c.content||"")+"</div>"),o.tabAuto(),this},g.prototype.tabDelete=function(a,c){var d=b(".layui-tab[lay-filter="+a+"]"),e=d.children(".layui-tab-title").find(">li").eq(c);return o.tabDelete(null,e),this},g.prototype.tabChange=function(a,c){var d=b(".layui-tab[lay-filter="+a+"]"),e=d.children(".layui-tab-title").find(">li").eq(c);return o.tabClick(null,c,e),this};var h=".layui-nav",i="layui-nav-item",j="layui-nav-bar",k="layui-nav-tree",l="layui-nav-child",m="layui-nav-more",n="layui-anim layui-anim-upbit",o={tabClick:function(a,c,g){var h=g||b(this),c=c||h.index(),i=h.parents(".layui-tab"),j=i.children(".layui-tab-content").children(".layui-tab-item"),k=i.attr("lay-filter");h.addClass(e).siblings().removeClass(e),j.eq(c).addClass(f).siblings().removeClass(f),layui.event.call(this,d,"tab("+k+")",{elem:i,index:c})},tabDelete:function(a,c){var d=c||b(this).parent(),f=d.index(),g=d.parents(".layui-tab"),h=g.children(".layui-tab-content").children(".layui-tab-item");d.hasClass(e)&&(d.next()[0]?o.tabClick.call(d.next()[0],null,f+1):d.prev()[0]&&o.tabClick.call(d.prev()[0],null,f-1)),d.remove(),h.eq(f).remove()},tabAuto:function(){var a="layui-tab-more",d="layui-tab-bar",e="layui-tab-close",f=this;b(".layui-tab").each(function(){var g=b(this),h=g.children(".layui-tab-title"),i=(g.children(".layui-tab-content").children(".layui-tab-item"),'lay-stope="tabmore"'),j=b('<span class="layui-unselect layui-tab-bar" '+i+"><i "+i+' class="layui-icon">&#xe61a;</i></span>');if(f===window&&8!=c.ie&&o.hideTabMore(!0),g.attr("lay-allowClose")&&h.find("li").each(function(){var a=b(this);if(!a.find("."+e)[0]){var c=b('<i class="layui-icon layui-unselect '+e+'">&#x1006;</i>');c.on("click",o.tabDelete),a.append(c)}}),h.prop("scrollWidth")>h.outerWidth()+1){if(h.find("."+d)[0])return;h.append(j),j.on("click",function(b){h[this.title?"removeClass":"addClass"](a),this.title=this.title?"":"收缩"})}else h.find("."+d).remove()})},hideTabMore:function(a){var c=b(".layui-tab-title");a!==!0&&"tabmore"===b(a.target).attr("lay-stope")||(c.removeClass("layui-tab-more"),c.find(".layui-tab-bar").attr("title",""))},clickThis:function(){var a=b(this),c=a.parents(h),f=c.attr("lay-filter");a.find("."+l)[0]||(c.find("."+e).removeClass(e),a.addClass(e),layui.event.call(this,d,"nav("+f+")",a))},clickChild:function(){var a=b(this),c=a.parents(h),f=c.attr("lay-filter");c.find("."+e).removeClass(e),a.addClass(e),layui.event.call(this,d,"nav("+f+")",a)},showChild:function(){var a=b(this),c=a.parents(h),d=a.parent(),e=a.siblings("."+l);c.hasClass(k)&&(e.removeClass(n),d["none"===e.css("display")?"addClass":"removeClass"](i+"ed"))}};g.prototype.init=function(a){var d={tab:function(){o.tabAuto.call({})},nav:function(){var a,d,e,g=200,p=function(h,i){var j=b(this),o=j.find("."+l);i.hasClass(k)?h.css({top:j.position().top,height:j.children("a").height(),opacity:1}):(o.addClass(n),h.css({left:j.position().left+parseFloat(j.css("marginLeft")),top:j.position().top+j.height()-5}),a=setTimeout(function(){h.css({width:j.width(),opacity:1})},c.ie&&c.ie<10?0:g),clearTimeout(e),"block"===o.css("display")&&clearTimeout(d),d=setTimeout(function(){o.addClass(f),j.find("."+m).addClass(m+"d")},300))};b(h).each(function(){var c=b(this),h=b('<span class="'+j+'"></span>'),n=c.find("."+i);c.find("."+j)[0]||(c.append(h),n.on("mouseenter",function(){p.call(this,h,c)}).on("mouseleave",function(){c.hasClass(k)||(clearTimeout(d),d=setTimeout(function(){c.find("."+l).removeClass(f),c.find("."+m).removeClass(m+"d")},300))}),c.on("mouseleave",function(){clearTimeout(a),e=setTimeout(function(){c.hasClass(k)?h.css({height:0,top:h.position().top+h.height()/2,opacity:0}):h.css({width:0,left:h.position().left+h.width()/2,opacity:0})},g)})),n.each(function(){var a=b(this),c=a.find("."+l);if(c[0]&&!a.find("."+m)[0]){var d=a.children("a");d.append('<span class="'+m+'"></span>')}a.off("click",o.clickThis).on("click",o.clickThis),a.children("a").off("click",o.showChild).on("click",o.showChild),c.children("dd").off("click",o.clickChild).on("click",o.clickChild)})})},breadcrumb:function(){var a=".layui-breadcrumb";b(a).each(function(){var a=b(this),c=a.attr("lay-separator")||">",d=a.find("a");d.find(".layui-box")[0]||(d.each(function(a){a!==d.length-1&&b(this).append('<span class="layui-box">'+c+"</span>")}),a.css("visibility","visible"))})}};return layui.each(d,function(a,b){b()})};var p=new g,q=b(document);p.init();var r=".layui-tab-title li";q.on("click",r,o.tabClick),q.on("click",o.hideTabMore),b(window).on("resize",o.tabAuto),a(d,function(a){return p.set(a)})});