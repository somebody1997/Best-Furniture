(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb84d2a"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"159b":function(t,e,o){var c=o("da84"),r=o("fdbc"),n=o("17c2"),i=o("9112");for(var a in r){var s=c[a],d=s&&s.prototype;if(d&&d.forEach!==n)try{i(d,"forEach",n)}catch(l){d.forEach=n}}},"17c2":function(t,e,o){"use strict";var c=o("b727").forEach,r=o("a640"),n=r("forEach");t.exports=n?[].forEach:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,o){var c=o("d039"),r=o("b622"),n=o("2d00"),i=r("species");t.exports=function(t){return n>=51||!c((function(){var e=[],o=e.constructor={};return o[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,o){"use strict";var c=o("23e7"),r=o("5a34"),n=o("1d80"),i=o("ab13");c({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(n(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"3a5e":function(t,e,o){"use strict";var c=o("7a23"),r=Object(c["createVNode"])("div",{class:"loadingio-spinner-pulse-l41p5goehyp"},[Object(c["createVNode"])("div",{class:"ldio-hyq1cgqd55a"},[Object(c["createVNode"])("div"),Object(c["createVNode"])("div"),Object(c["createVNode"])("div")])],-1);function n(t,e,o,n,i,a){var s=Object(c["resolveComponent"])("loading",!0);return Object(c["openBlock"])(),Object(c["createBlock"])(s,{active:t.isLoading,"onUpdate:active":e[1]||(e[1]=function(e){return t.isLoading=e})},{default:Object(c["withCtx"])((function(){return[r]})),_:1},8,["active"])}var i={props:["is-loading"]};i.render=n;e["a"]=i},"464c":function(t,e,o){t.exports=o.p+"img/categoryPIC.c411df87.jpg"},"466d":function(t,e,o){"use strict";var c=o("d784"),r=o("825a"),n=o("50c4"),i=o("1d80"),a=o("8aa5"),s=o("14c3");c("match",(function(t,e,o){return[function(e){var o=i(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,o):new RegExp(e)[t](String(o))},function(t){var c=o(e,this,t);if(c.done)return c.value;var i=r(this),d=String(t);if(!i.global)return s(i,d);var l=i.unicode;i.lastIndex=0;var u,f=[],p=0;while(null!==(u=s(i,d))){var h=String(u[0]);f[p]=h,""===h&&(i.lastIndex=a(d,n(i.lastIndex),l)),p++}return 0===p?null:f}]}))},"4dcd":function(t,e,o){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,o){var c=t.get(e);c?c.push(o):t.set(e,[o])},off:function(e,o){var c=t.get(e);c&&(o?c.splice(c.indexOf(o)>>>0,1):t.set(e,[]))},emit:function(e,o){var c=t.get(e);c&&c.slice().map((function(t){t(o)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,o)}))}}},r=c();e["a"]=r},"4de4":function(t,e,o){"use strict";var c=o("23e7"),r=o("b727").filter,n=o("1dde"),i=n("filter");c({target:"Array",proto:!0,forced:!i},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,o){var c=o("44e7");t.exports=function(t){if(c(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,o){var c=o("861d"),r=o("e8b5"),n=o("b622"),i=n("species");t.exports=function(t,e){var o;return r(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?c(o)&&(o=o[i],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},8418:function(t,e,o){"use strict";var c=o("c04e"),r=o("9bf2"),n=o("5c6c");t.exports=function(t,e,o){var i=c(e);i in t?r.f(t,i,n(0,o)):t[i]=o}},"841c":function(t,e,o){"use strict";var c=o("d784"),r=o("825a"),n=o("1d80"),i=o("129f"),a=o("14c3");c("search",(function(t,e,o){return[function(e){var o=n(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,o):new RegExp(e)[t](String(o))},function(t){var c=o(e,this,t);if(c.done)return c.value;var n=r(this),s=String(t),d=n.lastIndex;i(d,0)||(n.lastIndex=0);var l=a(n,s);return i(n.lastIndex,d)||(n.lastIndex=d),null===l?-1:l.index}]}))},9701:function(t,e,o){"use strict";o.r(e);o("caad"),o("2532");var c=o("7a23"),r=o("464c"),n=o.n(r),i={class:"container"},a=Object(c["createVNode"])("div",{class:"container pt-5"},[Object(c["createVNode"])("div",{class:" py-3"},[Object(c["createVNode"])("div",{class:"row pt-4 pb-1"},[Object(c["createVNode"])("div",{class:"col-md-12 col-sm-12 pt-4"},[Object(c["createVNode"])("div",{class:"card border-0 bg-warning"},[Object(c["createVNode"])("img",{src:n.a,class:"card-img-top"})])])])])],-1),s={class:"row "},d=Object(c["createVNode"])("div",{class:"col"},[Object(c["createVNode"])("h4",{class:"text-center"}," Product Categories "),Object(c["createVNode"])("p",{class:"text-center py-4"},[Object(c["createTextVNode"])(" Our unique portfolio of furniture designs from present day "),Object(c["createVNode"])("br"),Object(c["createTextVNode"])(" includes interior objects by internationally acclaimed designers. ")])],-1),l={class:"d-flex justify-content-evenly "},u={class:"\n              list-group list-group-horizontal\n              fw-bold\n              fs-5\n              flex-wrap\n              justify-content-center\n            "},f=Object(c["createTextVNode"])(" All Products "),p={class:"container pb-6"},h={class:"container mt-md-5 mt-2 mb-7"},b={class:"row"},v={class:"card border-0 mb-4 position-relative"},g={class:"card-body px-3 bg-warning"},O={class:"mb-0 mt-2"},m={class:"\n                      d-flex\n                      justify-content-between\n                      align-items-center\n                      my-2\n                      pb-2\n                    "},y={class:"row"},j={class:""},w={key:0,class:"h6 text-muted mt-3"},x={key:1,class:"h6"},C={key:2,class:"h5"},N={class:"d-flex justify-content-end"},k={key:0,class:"material-icons",style:{"font-size":"32px"}},V={key:1,class:"material-icons",style:{"font-size":"32px"}},B=Object(c["createVNode"])("span",{class:"material-icons",style:{"font-size":"30px"}}," add_circle ",-1);function T(t,e,o,r,n,T){var E=Object(c["resolveComponent"])("Loading"),I=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("section",i,[Object(c["createVNode"])(E,{"is-loading":n.isLoading},null,8,["is-loading"]),a,Object(c["createVNode"])("div",s,[d,Object(c["createVNode"])("div",l,[Object(c["createVNode"])("div",u,[Object(c["createVNode"])(I,{to:"/products",class:["\n                list-group-item\n                border-0\n                px-3\n                py-2\n                rounded-pill\n                text-center\n                me-lg-2 me-1\n                mb-1\n              ",{"bg-primary":""===n.selectCategory,"text-white":""===n.selectCategory}]},{default:Object(c["withCtx"])((function(){return[f]})),_:1},8,["class"]),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(n.categoryList,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("a",{href:"#",key:t,class:["\n                list-group-item\n                border-0\n                px-3\n                py-2\n                rounded-pill\n                text-center\n                me-lg-2 me-1\n                mb-1\n              ",{"bg-primary":n.selectCategory===t,"text-white":n.selectCategory===t}],onClick:Object(c["withModifiers"])((function(e){return n.selectCategory=t}),["prevent"])},Object(c["toDisplayString"])(t),11,["onClick"])})),128))])])]),Object(c["createVNode"])("div",p,[Object(c["createVNode"])("div",h,[Object(c["createVNode"])("div",b,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(T.filterProducts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-lg-3 col-md-4",key:e.id},[Object(c["createVNode"])("div",v,[Object(c["createVNode"])("img",{src:e.imageUrl,class:"card-img-top rounded-0"},null,8,["src"]),Object(c["createVNode"])("div",g,[Object(c["createVNode"])(I,{to:"/product/".concat(e.id),class:"\n                        products d-block position-relative\n                        textho\n                      "},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("h4",O,Object(c["toDisplayString"])(e.title),1)]})),_:2},1032,["to"]),Object(c["createVNode"])("div",m,[Object(c["createVNode"])("div",y,[Object(c["createVNode"])("div",j,[e.price?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",w," NT$ "+Object(c["toDisplayString"])(t.$toCurrency(e.origin_price)),1)),e.price?(Object(c["openBlock"])(),Object(c["createBlock"])("del",x,"NT$ "+Object(c["toDisplayString"])(t.$toCurrency(e.origin_price)),1)):Object(c["createCommentVNode"])("",!0),e.price?(Object(c["openBlock"])(),Object(c["createBlock"])("div",C," NT$ "+Object(c["toDisplayString"])(t.$toCurrency(e.price)),1)):Object(c["createCommentVNode"])("",!0)])])]),Object(c["createVNode"])("div",N,[Object(c["createVNode"])("a",{class:"addFavoriteBtn mt-2",onClick:Object(c["withModifiers"])((function(t){return T.addMyFavorite(e)}),["prevent"])},[n.favorites.includes(e.id)?(Object(c["openBlock"])(),Object(c["createBlock"])("span",k,"favorite")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",V,"favorite_border"))],8,["onClick"]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-link p-2 me-1",onClick:Object(c["withModifiers"])((function(t){return T.addtoCart(e.id)}),["prevent"])},[B],8,["onClick"])])])])])})),128))])])])])}o("99af"),o("159b"),o("a434"),o("ac1f"),o("841c"),o("4de4"),o("466d");var E=o("d145"),I=o("3a5e"),L=o("4dcd"),S={data:function(){return{products:[],isLoading:!1,selectCategory:"",categoryList:[],categoryTitle:"",showTop:!1,search:"",favorites:E["a"].get()||[]}},components:{Loading:I["a"]},methods:{getProducts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("vueliveclass","/products/all");this.$http.get(e).then((function(e){e.data.success&&(t.isLoading=!1,t.products=e.data.products,t.categories())})).catch((function(e){e&&(t.isLoading=!1,t.$moshaToast({title:"ERROR"},{showIcon:!0,showCloseButton:!0,timeout:3e3,swipeClose:!0,type:"warning",transition:"slide"}))}))},categories:function(){var t=this;this.products.forEach((function(e){-1===t.categoryList.indexOf(e.category)&&t.categoryList.push(e.category)}))},addtoCart:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("vueliveclass","/cart");this.isLoading=!0;var r={data:{product_id:t,qty:o}};this.$http.post(c,r).then((function(t){t.data.success?(e.isLoading=!1,e.$moshaToast({title:"Product was addd to the shopping cart"},{showIcon:!0,showCloseButton:!0,timeout:3e3,swipeClose:!0,type:"success",transition:"slide"}),L["a"].emit("product-cart")):e.$moshaToast({title:"ERROR"},{showIcon:!0,showCloseButton:!0,timeout:3e3,swipeClose:!0,type:"warning",transition:"slide"}),L["a"].emit("product-cart")})).catch((function(){e.$moshaToast({title:"ERROR"},{showIcon:!0,showCloseButton:!0,timeout:3e3,swipeClose:!0,type:"warning",transition:"slide"})}))},addMyFavorite:function(t){this.favorites.includes(t.id)?(this.favorites.splice(this.favorites.indexOf(t.id),1),this.$moshaToast({title:"Product was removed from wishlist"},{showIcon:!0,showCloseButton:!0,timeout:3e3,swipeClose:!0,toastBackgroundColor:"#58c0ff",transition:"slide"})):(this.favorites.push(t.id),this.$moshaToast({title:"Product was added to wishlist"},{showIcon:!0,showCloseButton:!0,timeout:3e3,swipeClose:!0,toastBackgroundColor:"#58c0ff",transition:"slide"})),E["a"].save(this.favorites),L["a"].emit("favorite")}},watch:{$route:function(){this.selectCategory=this.$route.query.category||""}},computed:{filterProducts:function(){var t=this;return this.search?this.products.filter((function(e){return e.title.match(t.search)})):this.products.filter((function(e){return e.category.match(t.selectCategory)}))}},mounted:function(){this.getProducts(),this.selectCategory=this.$route.query.category||""}};S.render=T;e["default"]=S},"99af":function(t,e,o){"use strict";var c=o("23e7"),r=o("d039"),n=o("e8b5"),i=o("861d"),a=o("7b0b"),s=o("50c4"),d=o("8418"),l=o("65f0"),u=o("1dde"),f=o("b622"),p=o("2d00"),h=f("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",g=p>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=u("concat"),m=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:n(t)},y=!g||!O;c({target:"Array",proto:!0,forced:y},{concat:function(t){var e,o,c,r,n,i=a(this),u=l(i,0),f=0;for(e=-1,c=arguments.length;e<c;e++)if(n=-1===e?i:arguments[e],m(n)){if(r=s(n.length),f+r>b)throw TypeError(v);for(o=0;o<r;o++,f++)o in n&&d(u,f,n[o])}else{if(f>=b)throw TypeError(v);d(u,f++,n)}return u.length=f,u}})},a434:function(t,e,o){"use strict";var c=o("23e7"),r=o("23cb"),n=o("a691"),i=o("50c4"),a=o("7b0b"),s=o("65f0"),d=o("8418"),l=o("1dde"),u=l("splice"),f=Math.max,p=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var o,c,l,u,v,g,O=a(this),m=i(O.length),y=r(t,m),j=arguments.length;if(0===j?o=c=0:1===j?(o=0,c=m-y):(o=j-2,c=p(f(n(e),0),m-y)),m+o-c>h)throw TypeError(b);for(l=s(O,c),u=0;u<c;u++)v=y+u,v in O&&d(l,u,O[v]);if(l.length=c,o<c){for(u=y;u<m-c;u++)v=u+c,g=u+o,v in O?O[g]=O[v]:delete O[g];for(u=m;u>m-c+o;u--)delete O[u-1]}else if(o>c)for(u=m-c;u>y;u--)v=u+c-1,g=u+o-1,v in O?O[g]=O[v]:delete O[g];for(u=0;u<o;u++)O[u+y]=arguments[u+2];return O.length=m-c+o,l}})},ab13:function(t,e,o){var c=o("b622"),r=c("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(o){try{return e[r]=!1,"/./"[t](e)}catch(c){}}return!1}},b727:function(t,e,o){var c=o("0366"),r=o("44ad"),n=o("7b0b"),i=o("50c4"),a=o("65f0"),s=[].push,d=function(t){var e=1==t,o=2==t,d=3==t,l=4==t,u=6==t,f=7==t,p=5==t||u;return function(h,b,v,g){for(var O,m,y=n(h),j=r(y),w=c(b,v,3),x=i(j.length),C=0,N=g||a,k=e?N(h,x):o||f?N(h,0):void 0;x>C;C++)if((p||C in j)&&(O=j[C],m=w(O,C,y),t))if(e)k[C]=m;else if(m)switch(t){case 3:return!0;case 5:return O;case 6:return C;case 2:s.call(k,O)}else switch(t){case 4:return!1;case 7:s.call(k,O)}return u?-1:d||l?l:k}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterOut:d(7)}},caad:function(t,e,o){"use strict";var c=o("23e7"),r=o("4d64").includes,n=o("44d2");c({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},d145:function(t,e,o){"use strict";e["a"]={save:function(t){var e=JSON.stringify(t);localStorage.setItem("brunchFavorite",e)},get:function(){return JSON.parse(localStorage.getItem("brunchFavorite"))}}},e8b5:function(t,e,o){var c=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}}}]);
//# sourceMappingURL=chunk-5fb84d2a.1390a782.js.map