function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){var a;if(e)return"string"==typeof e?_arrayLikeToArray(e,r):"Map"===(a="Object"===(a={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,r):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,n=Array(r);a<r;a++)n[a]=e[a];return n}var initCommentBarrage,commentLinkFilter,_getCommentReplies,popCommentBarrage,removeCommentBarrage,commentBarrageConfig,commentInterval,hoverOnCommentBarrage,commentEntryCallback,observer,postCommentTarget;document.querySelector(".comment-barrage")&&(initCommentBarrage=function(){var e,r;commentBarrageConfig.dom&&(e=JSON.stringify({event:"COMMENT_GET","commentBarrageConfig.accessToken":commentBarrageConfig.accessToken,url:commentBarrageConfig.pageUrl}),(r=new XMLHttpRequest).withCredentials=!0,r.addEventListener("readystatechange",function(){4===this.readyState&&this.responseText&&(commentBarrageConfig.barrageList=commentLinkFilter(JSON.parse(this.responseText).data),commentBarrageConfig.dom.innerHTML="")}),r.open("POST",commentBarrageConfig.twikooUrl),r.setRequestHeader("Content-Type","application/json"),r.send(e),clearInterval(commentInterval),commentInterval=null,commentInterval=setInterval(function(){commentBarrageConfig.barrageList.length&&!hoverOnCommentBarrage&&(popCommentBarrage(commentBarrageConfig.barrageList[commentBarrageConfig.barrageIndex]),commentBarrageConfig.barrageIndex+=1,commentBarrageConfig.barrageIndex%=commentBarrageConfig.barrageList.length),commentBarrageConfig.barrageTimer.length>(commentBarrageConfig.barrageList.length>commentBarrageConfig.maxBarrage?commentBarrageConfig.maxBarrage:commentBarrageConfig.barrageList.length)&&!hoverOnCommentBarrage&&removeCommentBarrage(commentBarrageConfig.barrageTimer.shift())},commentBarrageConfig.barrageTime))},commentLinkFilter=function(e){e.sort(function(e,r){return e.created-r.created});var r=[];return e.forEach(function(e){r.push.apply(r,_toConsumableArray(_getCommentReplies(e)))}),r},_getCommentReplies=function(e){var r;return e.replies?(r=[e],e.replies.forEach(function(e){r.push.apply(r,_toConsumableArray(_getCommentReplies(e)))}),r):[]},popCommentBarrage=function(e){var r=document.createElement("div");r.className="comment-barrage-item",r.innerHTML='\n          <div class="barrageHead">\n            <a class="barrageTitle '.concat(e.mailMd5===commentBarrageConfig.mailMd5?"barrageBloggerTitle":"",'" href="javascript:anzhiyu.scrollTo(\'#post-comment\')"">\n              ').concat(e.mailMd5===commentBarrageConfig.mailMd5?"博主":"热评",'\n            </a>\n            <div class="barrageNick">').concat(e.nick,'</div>\n            <img class="nolazyload barrageAvatar" src="https://cravatar.cn/avatar/').concat(e.mailMd5,'"/>\n            <a class="comment-barrage-close" href="javascript:anzhiyu.switchCommentBarrage()"><i class="anzhiyufont anzhiyu-icon-xmark"></i></a>\n          </div>\n          <anzhiyu class="barrageContent" onClick="window.location.hash = \'').concat(e.id,"'\">\n            ").concat(e.comment,"\n          </anzhiyu>\n        "),r.querySelectorAll("anzhiyu pre").forEach(function(e){var r=document.createElement("span");r.innerText="【代码】",e.parentNode.replaceChild(r,e)}),r.querySelectorAll("anzhiyu img").forEach(function(e){var r;e.classList.contains("tk-owo-emotion")||(e.style.display="none",(r=document.createElement("span")).innerText="【图片】",e.parentNode.replaceChild(r,e))}),commentBarrageConfig.barrageTimer.push(r),commentBarrageConfig.dom.append(r)},removeCommentBarrage=function(e){e.className="comment-barrage-item out",setTimeout(function(){commentBarrageConfig.dom&&commentBarrageConfig.dom.contains(e)&&commentBarrageConfig.dom.removeChild(e)},1e3)},commentBarrageConfig={maxBarrage:GLOBAL_CONFIG.commentBarrageConfig.maxBarrage,barrageTime:GLOBAL_CONFIG.commentBarrageConfig.barrageTime,twikooUrl:GLOBAL_CONFIG.twikooEnvId,accessToken:GLOBAL_CONFIG.commentBarrageConfig.accessToken,mailMd5:GLOBAL_CONFIG.commentBarrageConfig.mailMd5,pageUrl:window.location.pathname,barrageTimer:[],barrageList:[],barrageIndex:0,dom:document.querySelector(".comment-barrage")},commentInterval=null,hoverOnCommentBarrage=!1,document.querySelector(".comment-barrage").addEventListener("mouseenter",function(){hoverOnCommentBarrage=!0}),document.querySelector(".comment-barrage").addEventListener("mouseleave",function(){hoverOnCommentBarrage=!1}),observer=new IntersectionObserver(commentEntryCallback=function(e){var r=document.querySelector(".comment-barrage"),a=document.getElementById("post-comment");e.forEach(function(e){a&&r&&768<document.body.clientWidth&&(r.style.bottom=e.isIntersecting?"-".concat(200*commentBarrageConfig.maxBarrage,"px"):"0")})},{root:null,rootMargin:"0px",threshold:0}),(postCommentTarget=document.getElementById("post-comment"))&&observer.observe(postCommentTarget),initCommentBarrage(),"false"!==localStorage.getItem("commentBarrageSwitch")?(document.querySelector(".comment-barrage").style.display="flex",document.querySelector(".menu-commentBarrage-text").textContent="关闭热评"):(document.querySelector(".comment-barrage").style.display="none",document.querySelector(".menu-commentBarrage-text").textContent="显示热评"),document.addEventListener("pjax:send",function(){clearInterval(commentInterval)}));