(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-298c5180"],{"1dde":function(t,e,c){var a=c("d039"),o=c("b622"),r=c("2d00"),n=o("species");t.exports=function(t){return r>=51||!a((function(){var e=[],c=e.constructor={};return c[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"21cf":function(t,e,c){t.exports=c.p+"img/logo2.87a69c61.png"},"3d19":function(t,e,c){},"4dcd":function(t,e,c){"use strict";var a=function(t){return{all:t=t||new Map,on:function(e,c){var a=t.get(e);a?a.push(c):t.set(e,[c])},off:function(e,c){var a=t.get(e);a&&(c?a.splice(a.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var a=t.get(e);a&&a.slice().map((function(t){t(c)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,c)}))}}},o=a();e["a"]=o},"65c6":function(t,e,c){"use strict";c("3d19")},"65f0":function(t,e,c){var a=c("861d"),o=c("e8b5"),r=c("b622"),n=r("species");t.exports=function(t,e){var c;return o(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!o(c.prototype)?a(c)&&(c=c[n],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},8418:function(t,e,c){"use strict";var a=c("c04e"),o=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var n=a(e);n in t?o.f(t,n,r(0,c)):t[n]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),o=c("d039"),r=c("e8b5"),n=c("861d"),i=c("7b0b"),s=c("50c4"),l=c("8418"),u=c("65f0"),d=c("1dde"),f=c("b622"),p=c("2d00"),b=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",g=p>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),h=d("concat"),x=function(t){if(!n(t))return!1;var e=t[b];return void 0!==e?!!e:r(t)},O=!g||!h;a({target:"Array",proto:!0,forced:O},{concat:function(t){var e,c,a,o,r,n=i(this),d=u(n,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?n:arguments[e],x(r)){if(o=s(r.length),f+o>v)throw TypeError(m);for(c=0;c<o;c++,f++)c in r&&l(d,f,r[c])}else{if(f>=v)throw TypeError(m);l(d,f++,r)}return d.length=f,d}})},d145:function(t,e,c){"use strict";e["a"]={save:function(t){var e=JSON.stringify(t);localStorage.setItem("brunchFavorite",e)},get:function(){return JSON.parse(localStorage.getItem("brunchFavorite"))}}},de8a:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),o=c("21cf"),r=c.n(o),n={class:"navbar navbar-expand-lg  bg-light fixed-top pb-2"},i={class:"container"},s=Object(a["createVNode"])("div",{class:"d-flex position-relative h-80 h-md-auto"},[Object(a["createVNode"])("img",{class:"logo__6 py-3",src:r.a,"data-cursor":"cursor"})],-1),l={class:"navbar-nav"},u={class:"d-flex"},d=Object(a["createVNode"])("span",{class:"material-icons",style:{"font-size":"32px"}}," store ",-1),f={class:"popup"},p=Object(a["createVNode"])("span",{class:"material-icons","data-cursor":"cursor",style:{"font-size":"30px"}}," favorite ",-1),b={key:0,class:" nav-num2"},v={class:"popup"},m={key:0,class:"nav-num"},g=Object(a["createVNode"])("span",{class:"material-icons text-3xl",style:{"font-size":"30px"}}," shopping_cart ",-1),h=Object(a["createStaticVNode"])('<footer class="bg-info"><div class="container py-5"><div class="row py-4"><div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3"><p class="font-italic text-muted"> Store Location <br> 99 Amazing Grace Road <br> Victoria ParkLondon E12 7LD <br></p><p class="font-italic text-muted"> Monday–Saturday 11:00am–6:00pm Sunday 11:00am–5:00pm </p><ul class="list-inline mt-4"><li class="list-inline-item"><a href="#" target="_blank" title="instagram"><span class="material-icons" style="font-size:28px;"> facebook </span></a></li></ul></div><div class="col-lg-2 col-md-6 mb-4 mb-lg-0"><h6 class="text-uppercase fw-bolder mb-4">About</h6><ul class="list-unstyled mb-0"><li class="mb-2"><a href="#" class="text-white text-light textho">Contact</a></li></ul></div><div class="col-lg-2 col-md-6 mb-4 mb-lg-0"><h6 class="text-uppercase fw-bolder mb-4">Services</h6><ul class="list-unstyled mb-0"><li class="mb-2"><a href="#" class="text-muted text-light\n              textho">Delivery Service</a></li><li class="mb-2"><a href="#" class="text-muted text-light textho">Furnishing Advice</a></li></ul></div><div class="col-lg-4 col-md-6 mb-lg-0"><h6 class="text-uppercase fw-bolder mb-4">Best Furniture</h6><p class="text-muted mb-4"> Furniture you will fall for. <br> Harmonious, Comfort, Elegant. </p></div></div></div><div class="bg-info py-4"><div class="container text-center"><p class="text-muted mb-0 py-2"> © 2021 Best servered. 作品僅供練習使用 無商業用途 </p></div></div></footer>',1);function x(t,e,c,o,r,x){var O=Object(a["resolveComponent"])("router-link"),j=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])(O,{to:"/",class:"logo"},{default:Object(a["withCtx"])((function(){return[s]})),_:1}),Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])(O,{to:"/products",class:"link mx-3"},{default:Object(a["withCtx"])((function(){return[d]})),_:1}),Object(a["createVNode"])("div",f,[Object(a["createVNode"])(O,{to:"/wishlist",class:"position-relative link pr-2 pt-3"},{default:Object(a["withCtx"])((function(){return[p,r.favorites?(Object(a["openBlock"])(),Object(a["createBlock"])("span",b,Object(a["toDisplayString"])(r.favorites.length),1)):Object(a["createCommentVNode"])("",!0)]})),_:1})]),Object(a["createVNode"])("div",v,[Object(a["createVNode"])(O,{to:"/shippingcart",class:"position-relative link px-3"},{default:Object(a["withCtx"])((function(){return[r.cart.carts?(Object(a["openBlock"])(),Object(a["createBlock"])("span",m,Object(a["toDisplayString"])(r.cart.carts.length),1)):Object(a["createCommentVNode"])("",!0),g]})),_:1})])])])])]),Object(a["createVNode"])(j),h],64)}c("99af");var O=c("d145"),j=c("4dcd"),y={data:function(){return{cart:{},favorites:O["a"].get()||[]}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("vueliveclass","/cart");this.$http.get(e).then((function(e){t.cart=e.data.data})).catch((function(e){t.$moshaToast({title:e},{showIcon:!0,showCloseButton:!0,timeout:3e3,swipeClose:!0,type:"warning",transition:"slide"})}))}},mounted:function(){var t=this;this.getCart(),j["a"].on("product-cart",(function(){t.getCart()})),j["a"].on("favorite",(function(){t.favorites=O["a"].get()}))},unmounted:function(){var t=this;j["a"].off("product-cart",(function(){t.getCart()})),j["a"].off("favorite",(function(){t.favorites=O["a"].get()}))}};c("65c6");y.render=x;e["default"]=y},e8b5:function(t,e,c){var a=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-298c5180.50be11ad.js.map