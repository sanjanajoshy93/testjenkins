!function(t,o,n,i){function a(e,o){this.element=e,this.options=t.extend(!0,{},l,o),this.options.share=o.share,this._defaults=l,this._name=r,this.init()}var r="sharifycount",l={className:"sharifycount",share:{googlePlus:!1,facebook:!1,twitter:!1,digg:!1,delicious:!1,stumbleupon:!1,linkedin:!1,pinterest:!1},shareTotal:0,template:"",title:"",url:n.location.href,text:n.title,urlCurl:"sharifycount.php",count:{},total:0,shorterTotal:!0,enableHover:!0,enableCounter:!0,enableTracking:!1,hover:function(){},hide:function(){},click:function(){},render:function(){},buttons:{googlePlus:{url:"",urlCount:!1,size:"medium",lang:"en-US",annotation:""},facebook:{url:"",urlCount:!1,action:"like",layout:"button_count",width:"",send:"false",faces:"false",colorscheme:"",font:"",lang:"en_US"},twitter:{url:"",urlCount:!1,count:"horizontal",hashtags:"",via:"",related:"",lang:"en"},digg:{url:"",urlCount:!1,type:"DiggCompact"},delicious:{url:"",urlCount:!1,size:"medium"},stumbleupon:{url:"",urlCount:!1,layout:"1"},linkedin:{url:"",urlCount:!1,counter:""},pinterest:{url:"",media:"",description:"",layout:"horizontal"}}},u={googlePlus:"",facebook:"//graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",twitter:"//cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",digg:"//services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",delicious:"//feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",stumbleupon:"",linkedin:"//www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",pinterest:"//api.pinterest.com/v1/urls/count.json?url={url}&callback=?"},c={googlePlus:function(e){var i=e.options.buttons.googlePlus;t(e.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="'+i.size+'" data-href="'+(""!==i.url?i.url:e.options.url)+'" data-annotation="'+i.annotation+'"></div></div>'),o.___gcfg={lang:e.options.buttons.googlePlus.lang};var s=0;"undefined"==typeof gapi&&0==s?(s=1,function(){var t=n.createElement("script");t.type="text/javascript",t.async=!0,t.src="//apis.google.com/js/plusone.js";var e=n.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()):gapi.plusone.go()},facebook:function(e){var o=e.options.buttons.facebook;t(e.element).find(".buttons").append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="'+(""!==o.url?o.url:e.options.url)+'" data-send="'+o.send+'" data-layout="'+o.layout+'" data-width="'+o.width+'" data-show-faces="'+o.faces+'" data-action="'+o.action+'" data-colorscheme="'+o.colorscheme+'" data-font="'+o.font+'" data-via="'+o.via+'"></div></div>');var i=0;"undefined"==typeof FB&&0==i?(i=1,function(t,e,n){var i,s=t.getElementsByTagName(e)[0];t.getElementById(n)||(i=t.createElement(e),i.id=n,i.src="//connect.facebook.net/"+o.lang+"/all.js#xfbml=1",s.parentNode.insertBefore(i,s))}(n,"script","facebook-jssdk")):FB.XFBML.parse()},twitter:function(e){var o=e.options.buttons.twitter;t(e.element).find(".buttons").append('<div class="button twitter"><a href="//twitter.com/share" class="twitter-share-button" data-url="'+(""!==o.url?o.url:e.options.url)+'" data-count="'+o.count+'" data-text="'+e.options.text+'" data-via="'+o.via+'" data-hashtags="'+o.hashtags+'" data-related="'+o.related+'" data-lang="'+o.lang+'">Tweet</a></div>');var i=0;"undefined"==typeof twttr&&0==i?(i=1,function(){var t=n.createElement("script");t.type="text/javascript",t.async=!0,t.src="//platform.twitter.com/widgets.js";var e=n.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()):t.ajax({url:"//platform.twitter.com/widgets.js",dataType:"script",cache:!0})},digg:function(e){var o=e.options.buttons.digg;t(e.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton '+o.type+'" rel="nofollow external" href="//digg.com/submit?url='+encodeURIComponent(""!==o.url?o.url:e.options.url)+'"></a></div>');var i=0;"undefined"==typeof __DBW&&0==i&&(i=1,function(){var t=n.createElement("SCRIPT"),e=n.getElementsByTagName("SCRIPT")[0];t.type="text/javascript",t.async=!0,t.src="//widgets.digg.com/buttons.js",e.parentNode.insertBefore(t,e)}())},delicious:function(e){if("tall"==e.options.buttons.delicious.size)var o="width:50px;",n="height:35px;width:50px;font-size:15px;line-height:35px;",i="height:18px;line-height:18px;margin-top:3px;";else var o="width:93px;",n="float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",i="float:left;height:20px;line-height:20px;";var s=e.shorterTotal(e.options.count.delicious);"undefined"==typeof s&&(s=0),t(e.element).find(".buttons").append('<div class="button delicious"><div style="'+o+'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="'+n+'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">'+s+'</div><div style="'+i+'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="//www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>'),t(e.element).find(".delicious").on("click",function(){e.openPopup("delicious")})},stumbleupon:function(e){var i=e.options.buttons.stumbleupon;t(e.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="'+i.layout+'" location="'+(""!==i.url?i.url:e.options.url)+'"></su:badge></div>');var a=0;"undefined"==typeof STMBLPN&&0==a?(a=1,function(){var t=n.createElement("script");t.type="text/javascript",t.async=!0,t.src="//platform.stumbleupon.com/1/widgets.js";var e=n.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}(),s=o.setTimeout(function(){"undefined"!=typeof STMBLPN&&(STMBLPN.processWidgets(),clearInterval(s))},500)):STMBLPN.processWidgets()},linkedin:function(e){var i=e.options.buttons.linkedin;t(e.element).find(".buttons").append('<div class="button linkedin"><script type="in/share" data-url="'+(""!==i.url?i.url:e.options.url)+'" data-counter="'+i.counter+'"></script></div>');var s=0;"undefined"==typeof o.IN&&0==s?(s=1,function(){var t=n.createElement("script");t.type="text/javascript",t.async=!0,t.src="//platform.linkedin.com/in.js";var e=n.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()):o.IN.init()},pinterest:function(e){var o=e.options.buttons.pinterest;t(e.element).find(".buttons").append('<div class="button pinterest"><a href="//pinterest.com/pin/create/button/?url='+(""!==o.url?o.url:e.options.url)+"&media="+o.media+"&description="+o.description+'" class="pin-it-button" count-layout="'+o.layout+'">Pin It</a></div>'),function(){var t=n.createElement("script");t.type="text/javascript",t.async=!0,t.src="//assets.pinterest.com/js/pinit.js";var e=n.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}},p={googlePlus:function(){},facebook:function(){fb=o.setInterval(function(){"undefined"!=typeof FB&&(FB.Event.subscribe("edge.create",function(t){_gaq.push(["_trackSocial","facebook","like",t])}),FB.Event.subscribe("edge.remove",function(t){_gaq.push(["_trackSocial","facebook","unlike",t])}),FB.Event.subscribe("message.send",function(t){_gaq.push(["_trackSocial","facebook","send",t])}),clearInterval(fb))},1e3)},twitter:function(){tw=o.setInterval(function(){"undefined"!=typeof twttr&&(twttr.events.bind("tweet",function(t){t&&_gaq.push(["_trackSocial","twitter","tweet"])}),clearInterval(tw))},1e3)},digg:function(){},delicious:function(){},stumbleupon:function(){},linkedin:function(){},pinterest:function(){}},d={googlePlus:function(t){o.open("//plus.google.com/share?hl="+t.buttons.googlePlus.lang+"&url="+encodeURIComponent(""!==t.buttons.googlePlus.url?t.buttons.googlePlus.url:t.url),"","toolbar=0, status=0, width=900, height=500")},facebook:function(t){o.open("//www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(""!==t.buttons.facebook.url?t.buttons.facebook.url:t.url)+"&t="+t.text,"","toolbar=0, status=0, width=900, height=500")},twitter:function(t){o.open("//twitter.com/intent/tweet?text="+encodeURIComponent(t.text)+"&url="+encodeURIComponent(""!==t.buttons.twitter.url?t.buttons.twitter.url:t.url)+(""!==t.buttons.twitter.via?"&via="+t.buttons.twitter.via:""),"","toolbar=0, status=0, width=650, height=360")},digg:function(t){o.open("//digg.com/tools/diggthis/submit?url="+encodeURIComponent(""!==t.buttons.digg.url?t.buttons.digg.url:t.url)+"&title="+t.text+"&related=true&style=true","","toolbar=0, status=0, width=650, height=360")},delicious:function(t){o.open("//www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent(""!==t.buttons.delicious.url?t.buttons.delicious.url:t.url)+"&title="+t.text,"delicious","toolbar=no,width=550,height=550")},stumbleupon:function(t){o.open("//www.stumbleupon.com/badge/?url="+encodeURIComponent(""!==t.buttons.delicious.url?t.buttons.delicious.url:t.url),"stumbleupon","toolbar=no,width=550,height=550")},linkedin:function(t){o.open("//www.linkedin.com/cws/share?url="+encodeURIComponent(""!==t.buttons.delicious.url?t.buttons.delicious.url:t.url)+"&token=&isFramed=true","linkedin","toolbar=no,width=550,height=550")},pinterest:function(t){o.open("//pinterest.com/pin/create/button/?url="+encodeURIComponent(""!==t.buttons.pinterest.url?t.buttons.pinterest.url:t.url)+"&media="+encodeURIComponent(t.buttons.pinterest.media)+"&description="+t.buttons.pinterest.description,"pinterest","toolbar=no,width=700,height=300")}};a.prototype.init=function(){var e=this;""!==this.options.urlCurl&&(u.googlePlus=this.options.urlCurl+"?url={url}&type=googlePlus",u.stumbleupon=this.options.urlCurl+"?url={url}&type=stumbleupon"),t(this.element).addClass(this.options.className),"undefined"!=typeof t(this.element).data("title")&&(this.options.title=t(this.element).attr("data-title")),"undefined"!=typeof t(this.element).data("url")&&(this.options.url=t(this.element).data("url")),"undefined"!=typeof t(this.element).data("text")&&(this.options.text=t(this.element).data("text")),t.each(this.options.share,function(t,o){o===!0&&e.options.shareTotal++}),e.options.enableCounter===!0?t.each(this.options.share,function(t,o){if(o===!0)try{e.getSocialJson(t)}catch(n){}}):""!==e.options.template?this.options.render(this,this.options):this.loadButtons(),t(this.element).hover(function(){0===t(this).find(".buttons").length&&e.options.enableHover===!0&&e.loadButtons(),e.options.hover(e,e.options)},function(){e.options.hide(e,e.options)}),t(this.element).click(function(){return e.options.click(e,e.options),!1})},a.prototype.loadButtons=function(){var e=this;t(this.element).append('<div class="buttons"></div>'),t.each(e.options.share,function(t,o){1==o&&(c[t](e),e.options.enableTracking===!0&&p[t]())})},a.prototype.getSocialJson=function(e){var o=this,n=0,i=u[e].replace("{url}",encodeURIComponent(this.options.url));this.options.buttons[e].urlCount===!0&&""!==this.options.buttons[e].url&&(i=u[e].replace("{url}",this.options.buttons[e].url)),""!=i&&""!==o.options.urlCurl?t.getJSON(i,function(t){if("undefined"!=typeof t.count){var i=t.count+"";i=i.replace("Â ",""),n+=parseInt(i,10)}else t.data&&t.data.length>0&&"undefined"!=typeof t.data[0].total_count?n+=parseInt(t.data[0].total_count,10):"undefined"!=typeof t[0]?n+=parseInt(t[0].total_posts,10):"undefined"!=typeof t[0];o.options.count[e]=n,o.options.total+=n,o.renderer(),o.rendererPerso()}).error(function(){o.options.count[e]=0,o.rendererPerso()}):(o.renderer(),o.options.count[e]=0,o.rendererPerso())},a.prototype.rendererPerso=function(){var t=0;for(e in this.options.count)t++;t===this.options.shareTotal&&this.options.render(this,this.options)},a.prototype.renderer=function(){var e=this.options.total,o=this.options.template;this.options.shorterTotal===!0&&(e=this.shorterTotal(e)),""!==o?(o=o.replace("{total}",e),t(this.element).html(o)):t(this.element).html('<a class="count" href="#">'+e+"</a>"+(""!==this.options.title?'<a class="share" href="#">'+this.options.title+"</a>":""))},a.prototype.shorterTotal=function(t){return t>=1e6?t=(t/1e6).toFixed(2)+"M":t>=1e3&&(t=(t/1e3).toFixed(1)+"k"),t},a.prototype.openPopup=function(t){if(d[t](this.options),this.options.enableTracking===!0){var e={googlePlus:{site:"Google",action:"+1"},facebook:{site:"facebook",action:"like"},twitter:{site:"twitter",action:"tweet"},digg:{site:"digg",action:"add"},delicious:{site:"delicious",action:"add"},stumbleupon:{site:"stumbleupon",action:"add"},linkedin:{site:"linkedin",action:"share"},pinterest:{site:"pinterest",action:"pin"}};_gaq.push(["_trackSocial",e[t].site,e[t].action])}},a.prototype.simulateClick=function(){var e=t(this.element).html();t(this.element).html(e.replace(this.options.total,this.options.total+1))},a.prototype.update=function(t,e){""!==t&&(this.options.url=t),""!==e&&(this.options.text=e)},t.fn[r]=function(e){var o=arguments;return e===i||"object"==typeof e?this.each(function(){t.data(this,"plugin_"+r)||t.data(this,"plugin_"+r,new a(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var n=t.data(this,"plugin_"+r);n instanceof a&&"function"==typeof n[e]&&n[e].apply(n,Array.prototype.slice.call(o,1))}):void 0}}(jQuery,window,document),jQuery(document).ready(function(t){t("#twitter").sharifycount({share:{twitter:!0},enableHover:!1,click:function(t){t.simulateClick(),t.openPopup("twitter")}}),t("#facebook").sharifycount({share:{facebook:!0},enableHover:!1,click:function(t){t.simulateClick(),t.openPopup("facebook")}}),t("#linkedin").sharifycount({share:{linkedin:!0},enableHover:!1,click:function(t){t.simulateClick(),t.openPopup("linkedin")}})});if( /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {$(".sharify-btn-wa").addClass("ismobilewa");}