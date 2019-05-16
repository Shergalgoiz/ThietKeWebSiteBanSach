(function(){var Instafeed=function(){function b(c,d){var f,g;if(this.options={target:'insta-feed',feedLoaded:!1,pagination:!1,cache:0,picturesLoaded:0,shopOrigin:'',admin:'instafeed.nfcube.com'===window.location.hostname,title:'',columns:5},'object'==typeof c)for(f in c)g=c[f],this.options[f]=g;this.context=null===d?this:d,this.unique=this._genKey()}return b.prototype.hasNext=function(){return'string'==typeof this.context.nextUrl&&0<this.context.nextUrl.length},b.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},b.prototype.run=function(c){var d,f,g;if(!1===this.options.pagination){var h=document.getElementById('insta-feed').innerHTML;if(h=h.replace(/\s/g,''),0<h.length&&(this.options.feedLoaded=!0),document.getElementById('insta-feed').innerHTML='<em>Feed will load here...</em>',!0===this.options.feedLoaded)return!1}return''===this.options.accessToken?(console.log('Missing clientId or accessToken.'),!1):(null!==this.options.before&&'function'==typeof this.options.before&&this.options.before.call(this),'undefined'!=typeof document&&null!==document&&(g=document.createElement('script'),g.id='instafeed-fetcher',g.src=c||this._buildUrl(),d=document.getElementsByTagName('head'),d[0].appendChild(g),f='instafeedCache'+this.unique,window[f]=new b(this.options,this),window[f].unique=this.unique),!0)},b.prototype.parse=function(c){var f,g,h,m,n,o,p,r,s,t,u,v,w,y,z,A,C,D,F,I,J,K=document.getElementById('token-error');if(I=this.options.target,I=document.getElementById(I),this.options.admin&&(K.innerHTML=''),'object'!=typeof c)throw new Error('Invalid JSON response');if(200!==c.meta.code)throw'The access_token provided is invalid.'===c.meta.error_message&&(I.innerHTML='<em>Feed couldn\'t load. Token invalid.</em>'),this.options.admin&&('The access_token provided is invalid.'===c.meta.error_message?K.innerHTML+='&#9888; Your access token is invalid. Please generate a new one.<br/>':K.innerHTML=c.meta.error_message),new Error('Error from Instagram: '+c.meta.error_message);if(0===c.data.length)throw document.getElementById(this.options.target).innerHTML='<em>No images were returned from this Instagram account</em>',new Error('No images were returned from Instagram');if(null===I)throw m='No element with id="'+this.options.target+'" on page.',new Error(m);if(null!==this.options.success&&'function'==typeof this.options.success&&this.options.success.call(this,c),this.context.nextUrl='',null!=c.pagination&&(this.context.nextUrl=c.pagination.next_url),'undefined'!=typeof document&&null!==document){w=c.data,n=document.createDocumentFragment(),p='',u='',y='',J=document.createElement('div');var L=I.clientWidth/this.options.columns*window.devicePixelRatio,M='standard_resolution',N=this.options.limit,O=parseFloat(100/this.options.columns).toFixed(4),P=parseInt(100-this.options.space),Q='';isMobileDevice()&&0<parseInt(this.options.charge)?(L=I.clientWidth/this.options.columnsMobile*window.devicePixelRatio,O=parseFloat(100/this.options.columnsMobile).toFixed(4),N=this.options.limitMobile):0<parseInt(this.options.charge)&&0<parseInt(this.options.likes)&&(Q='<div class=\'likes\'><span>{{likes}}</span><span style=\'width:25px;\'><img src=\'https://instafeed.nfcube.com/assets/img/instagram-heart.png\' style=\'height:14px;width:15px;margin-bottom:-2px;\' /></span> <span style=\'margin-left:5px;\'>{{comments}}</span> <span style=\'width:25px;\'><img src=\'https://instafeed.nfcube.com/assets/img/instagram-comment.png\' style=\'height:14px;width:15px;margin-bottom:-1px;\' /></span></div>'),150>=L?M='thumbnail':320>=L&&(M='low_resolution');var U,V,W,X,Y,Z,R='<div style=\'width:'+P+'%;height:'+P+'%;\' class=\'instafeed-overlay\'>'+Q+'</div>',S='<div class=\'instafeed-container\' style=\'width:'+O+'%;padding-top:'+O+'%;\'><img class=\'js-lazy-image\' style=\'width:'+P+'%;height:'+P+'%;\' src=\'https://instafeed.nfcube.com/assets/img/pixel.gif\' data-src=\'{{image}}\' />'+R+'</div></div>',T='';for(1===parseInt(this.options.openIg)?S='<a href=\'{{link}}\' target=\'_blank\'>'+S+'</a>':2===parseInt(this.options.openIg)?this.options.admin?S='<a href=\''+this.options.shopOrigin+'/collections/all\' target=\'_blank\'>'+S+'</a>':S='<a href=\'//'+window.location.hostname+'/collections/all\'>'+S+'</a>':3===parseInt(this.options.openIg)&&(this.options.admin&&(T='<div class=\'products-tagging\'><object><a href=\'#{{id}}\' id=\'search\' data-picture-id=\'{{fullId}}\'><b>Tag Product</b></a></object></div>'),0<parseInt(this.options.charge)&&this.options.admin?(V='<object id=\'product-title\'><a href=\''+this.options.shopOrigin+'/products/{{productHandle}}/\' target=\'_blank\'>{{productTitle}}</a></object><br/><object><a href=\'#{{id}}\' id=\'delete-product\' data-picture-id=\'{{fullId}}\'>&#9746</a></object>',Y='<object><a href=\''+this.options.shopOrigin+'/products/{{productHandle}}/\' target=\'_blank\'>{{productImageSrc}}</a></object>'):0<parseInt(this.options.charge)&&!this.options.admin&&(V='<object id=\'product-title\'><a href=\'//'+window.location.hostname+'/products/{{productHandle}}/\'>{{productTitle}}</a></object>',Y='<object><a href=\'//'+window.location.hostname+'/products/{{productHandle}}/\'>{{productImageSrc}}</a></object>'),S='<a href=\'#{{id}}\'>'+S+'</a><a href=\'#_\' class=\'instafeed-lightbox\' id=\'{{id}}\'><div class=\'lightbox-instagram\'><div class=\'image\'><img class=\'js-lazy-image\' src=\'https://instafeed.nfcube.com/assets/img/pixel.gif\' data-src=\'{{imageFull}}\'></div><div class=\'description\'><div class=\'header\'><img src=\'https://instafeed.nfcube.com/assets/img/pixel.gif\' class=\'profile-picture js-lazy-image\' data-src=\'{{userPicture}}\' /><object class=\'username\'><a href=\'https://www.instagram.com/{{username}}/\' target=\'_blank\'><b>{{username}}</b></a></object><object><a href=\'https://www.instagram.com/{{username}}/\' target=\'_blank\' class=\'follow\'>Follow</a></object></div><hr><div class=\'box-content\'><em><span>&#9825; {{likes}}</span> - {{date}}</em><div class=\'arrows\'><object><a href=\'#{{minusId}}\'><img src=\'https://instafeed.nfcube.com/assets/img/arrow-left.png\' /></a></object><object><a href=\'#{{plusId}}\'><img src=\'https://instafeed.nfcube.com/assets/img/arrow-right.png\' /></a></object></div>'+T+'{{taggedProduct}}<div id=\'caption\'>{{caption}}</div></div></div></div></a>'),r=0,C=w.length;r<C;r++){if(s=w[r],t=s.images[M],'object'!=typeof t)throw m='No image found for resolution: '+M+'.',new Error(m);if(s.hasOwnProperty('tagged_products')&&0<s.tagged_products.length&&0<parseInt(this.options.charge)?(X=s.tagged_products[0].title,W=s.tagged_products[0].handle,Z='<img class=\'js-lazy-image\' src=\'https://instafeed.nfcube.com/assets/img/pixel.gif\' data-src=\''+s.tagged_products[0].image+'\' />',U='<div class=\'tagged-products\' id=\'{{fullId}}\'>{{productImageUrl}} '+V+'</div>'):(X='',W='',Z='',U=''),v=t.url,u=this._makeTemplate(S,{model:s,id:r,fullId:s.id,minusId:0===r?N-1:r-1,plusId:r===C?0:r+1,link:s.link,type:s.type,image:v,username:s.user.username,userPicture:s.user.profile_picture,imageFull:s.images.standard_resolution.url,taggedProduct:U,productTitle:X,productHandle:W,productImageSrc:Z,productImageUrl:Y,date:timeConverter(s.created_time),caption:escapeHtml(this._getObjectProperty(s,'caption.text')),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,'location.name')}),0<parseInt(this.options.filter.length)&&0<parseInt(this.options.charge)){for(tagsSize=s.tags.length,a=0;a<tagsSize;a++)if(s.tags[a]===this.options.filter.replace('#','')){p+=u,this.options.picturesLoaded++;break}}else p+=u,this.options.picturesLoaded++;if(this.options.picturesLoaded>=N)break}for(J.innerHTML=p,h=[],g=0,f=J.childNodes.length;g<f;)h.push(J.childNodes[g]),g+=1;for(A=0,D=h.length;A<D;A++)F=h[A],n.appendChild(F);if(!1===this.options.pagination&&(document.getElementById('insta-feed').innerHTML='',0<this.options.title.length)){var $=document.createElement('h2');$.innerHTML=this.options.title,I.insertBefore($,I.firstChild)}I.appendChild(n),o=document.getElementsByTagName('head')[0],o.removeChild(document.getElementById('instafeed-fetcher')),z='instafeedCache'+this.unique,window[z]=void 0;try{delete window[z]}catch(_){}}return this.options.picturesLoaded<N&&(this.options.pagination=!0,this.next()),lazyLoading(),!0},b.prototype._buildUrl=function(){var c,d,f;return c='https://api.instagram.com/v1',1===parseInt(this.options.cache)&&(c='https://instafeed.nfcube.com/index/v1'),d='users/self/media/recent',f=c+'/'+d,f+='?access_token='+this.options.accessToken,f+='&callback=instafeedCache'+this.unique+'.parse',f},b.prototype._genKey=function(){var c;return c=function(){return(0|65536*(1+Math.random())).toString(16).substring(1)},''+c()+c()+c()+c()},b.prototype._makeTemplate=function(c,d){var f,g,h,l,m;for(g=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,f=c;g.test(f);)l=f.match(g)[1],m=null===(h=this._getObjectProperty(d,l))?'':h,f=f.replace(g,function(){return''+m});return f},b.prototype._getObjectProperty=function(c,d){var f,g;for(d=d.replace(/\[(\w+)\]/g,'.$1'),g=d.split('.');g.length;)if(f=g.shift(),null!==c&&f in c)c=c[f];else return null;return c},b}();function escapeHtml(b){return b&&(b=b.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')),b}function timeConverter(b){var c=new Date(1e3*b),f=c.getFullYear(),g=['January','February','March','April','May','June','July','August','September','October','November','December'][c.getMonth()],h=c.getDate(),l=c.getHours(),m=c.getMinutes(),n=c.getSeconds();return g+' '+h}function loadCss(){var b=document.createElement('link');b.href='https://instafeed.nfcube.com/cdn/instafeed-3.1.0.css',b.type='text/css',b.rel='stylesheet',b.media='screen,print',document.getElementsByTagName('head')[0].appendChild(b)}function isMobileDevice(){var b='undefined'!=typeof window.orientation||-1!==navigator.userAgent.indexOf('IEMobile');return b}function lazyLoading(){function b(p){return new Promise((q,r)=>{const s=new Image;s.src=p,s.onload=q,s.onerror=r})}function c(p){const q=p.dataset.src;return q?b(q).then(()=>{h(p,q)}):void 0}function g(p){0===n&&o.disconnect();for(let r,q=0;q<p.length;q++)r=p[q],0<r.intersectionRatio&&(n--,o.unobserve(r.target),c(r.target))}function h(p,q){p.classList.add('js-lazy-image--handled'),p.src=q}const l=document.querySelectorAll('.js-lazy-image');let n=l.length,o;if(!('IntersectionObserver'in window))(function(p){for(let r,q=0;q<p.length;q++)r=p[q],c(r)})(l);else{o=new IntersectionObserver(g,{rootMargin:'100px 0px',threshold:0.01});for(let q,p=0;p<l.length;p++)(q=l[p],!q.classList.contains('js-lazy-image--handled'))&&o.observe(q)}}(function(b,c){return'function'==typeof define&&define.amd?define([],c):'object'==typeof module&&module.exports?(module.exports=c(),module.exports):(b.Instafeed=c(),b.Instafeed)})(this,function(){return Instafeed}),loadCss();if(document.getElementById('insta-feed')!==null){var feed=new Instafeed({title:'',openIg:1,cache:0,space:1,likes:0,filter:'',columns:6,columnsMobile:0,limit:6,limitMobile:0,charge:'0',accessToken:'230557639.1677ed0.35008659519b48ecb766ba2f5ba0fac8'});feed.run();}})();