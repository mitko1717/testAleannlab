(this["webpackJsonptest-task-aleannlab"]=this["webpackJsonptest-task-aleannlab"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"products":[{"id":1,"name":"Product A","description":"Probably the least reliable one on the list","price":120,"inventory":10,"imgUrl":"https://images.unsplash.com/photo-1584942368913-b98dd9983c7e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400"},{"id":2,"name":"Product B","description":"Solid and stable version of Product A","price":10,"inventory":100,"imgUrl":"https://images.unsplash.com/photo-1584559106175-85ba196ebe2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400"},{"id":3,"name":"Product C","description":"Solid and stable version of Product B","price":50,"inventory":0,"imgUrl":"https://images.unsplash.com/photo-1586283970632-8264074606be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400"},{"id":4,"name":"Product D","description":"Solid and stable version of Product C","price":70,"inventory":15,"imgUrl":"https://images.unsplash.com/photo-1585489869354-4ef071875398?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400"},{"id":5,"name":"Product E","description":"Better than most things in Walmart","price":20,"inventory":10,"imgUrl":"https://images.unsplash.com/photo-1586763209828-f0fa0773f19e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400"},{"id":6,"name":"Product F","description":"Too expensive, brand loyalty will burn a hole in your wallet","price":100,"inventory":20,"imgUrl":"https://images.unsplash.com/photo-1584466769623-4671db483b1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400"}]}')},21:function(e,t,n){e.exports=n.p+"static/media/Inter-Regular.3ae6a7d3.woff"},22:function(e,t,n){e.exports=n.p+"static/media/Inter-Regular.a62973a8.woff2"},23:function(e,t,n){e.exports=n.p+"static/media/Inter-Italic.5ddabe6d.woff"},24:function(e,t,n){e.exports=n.p+"static/media/Inter-Italic.9ae10ed3.woff2"},25:function(e,t,n){e.exports=n.p+"static/media/Inter-Bold.22049659.woff"},26:function(e,t,n){e.exports=n.p+"static/media/Inter-Bold.e7ae9868.woff2"},27:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),i=n.n(o),c=n(4),l=n(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d,u,f,s,m,p,y,b,g,h,v,w,j,x,E,O,k,P,I=n(2),S=n(3),C=n(6),B=n(5),q=Object(B.c)({name:"cart",initialState:{items:[],totalQuantity:0,totalSum:0},reducers:{addItem:function(e,t){var n=t.payload.product,r=e.items.find((function(e){return e.id===n.id}));e.totalQuantity++,r?0!==n.inventory&&(r.quantity++,r.inventory--,r.totalPrice=r.totalPrice+n.price):e.items.push(Object(C.a)(Object(C.a)({},n),{},{inventory:n.inventory-1,quantity:1,totalPrice:n.price})),e.totalSum=e.items.reduce((function(e,t){return e+t.totalPrice}),0)},removeItemFromCart:function(e,t){var n=t.payload,r=e.items.find((function(e){return e.id===n.id}));e.totalQuantity--,1===r.quantity?e.items=e.items.filter((function(e){return e.id!==n.id})):(r.quantity--,r.inventory++,r.totalPrice=r.totalPrice-n.price),e.totalSum=e.items.reduce((function(e,t){return e+t.totalPrice}),0)},deleteWholeProductFromCart:function(e,t){var n=t.payload.itemToDelete,r=t.payload.itemToDelete.quantity,a=e.items.find((function(e){return e.id===n.id}));a.inventory=a.inventory+a.quantity,e.items=e.items.filter((function(e){return e.id!==n.id})),e.totalQuantity=e.totalQuantity-r,e.totalSum=e.items.reduce((function(e,t){return e+t.totalPrice}),0)}}}),F=q.actions,T=F.addItem,D=F.removeItemFromCart,A=(F.setInputValue,F.deleteWholeProductFromCart),M=q.reducer,U=n(11),H=n(12),L=n.n(H),Q=n(18),W=n(19),z=Object(B.b)("products",Object(Q.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(JSON.stringify(W));case 2:return t=e.sent,e.abrupt("return",t.products);case 4:case"end":return e.stop()}}),e)})))),N=Object(B.c)({name:"catalog",initialState:{products:[],filteredProducts:[]},reducers:{decreaseInventory:function(e,t){var n=t.payload;n.product.inventory>0&&e.products.map((function(e){return e.id===n.product.id?Object(C.a)(Object(C.a)({},e),{},{inventory:e.inventory--}):e}))},increaseInventory:function(e,t){var n=t.payload;e.products.map((function(e){return e.id===n.item.id?Object(C.a)(Object(C.a)({},e),{},{inventory:e.inventory++}):e}))},addQuantityAfterDelete:function(e,t){var n=t.payload,r=e.products.find((function(e){return e.id===n.item.id}));r.inventory=r.inventory+n.quantity},filterProducts:function(e,t){e.products=e.filteredProducts.filter((function(e){return e.name.toLowerCase().includes(t.payload)}))}},extraReducers:Object(U.a)({},z.fulfilled,(function(e,t){e.products=t.payload,e.filteredProducts=t.payload}))}),R=N.actions,J=R.decreaseInventory,G=R.increaseInventory,$=R.addQuantityAfterDelete,V=R.filterProducts,K=N.reducer,X=l.default.div(d||(d=Object(I.a)(["\n  padding: 24px;\n  position: relative;\n"]))),Y=l.default.img(u||(u=Object(I.a)(["\n  width: 100%;\n  margin-bottom: 16px;\n"]))),Z=l.default.button(f||(f=Object(I.a)(["\n  width: 100%;\n  background: #eaf5fe;\n  color: #2b99f2;\n  padding: 12px 0px;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n"]))),_=l.default.span(s||(s=Object(I.a)(["\n  background-color: #36b37e;\n  color: white;\n  padding: 4px 16px;\n  border-radius: 16px;\n  position: absolute;\n  left: 36px;\n  top: 36px;\n"]))),ee=function(e){var t=Object(c.b)();return a.a.createElement(X,{style:0===e.inventory?{opacity:"0.5"}:{}},a.a.createElement(_,null,e.inventory>0?"In Stock":"Out of Stock"),a.a.createElement(Y,{src:e.imgUrl,alt:e.name}),a.a.createElement("h2",null,e.name),a.a.createElement("p",null,e.description),a.a.createElement("h6",null,e.inventory," items in stock"),a.a.createElement("h4",null,"$",e.price),a.a.createElement(Z,{style:0===e.inventory?{pointerEvents:"none",opacity:"0.5"}:{},onClick:function(){!function(e){t(T({product:e}))}(e),t(J({product:e}))}},"Add to cart"))},te=l.default.div(m||(m=Object(I.a)(["\n  padding: 48px;\n  position: relative;\n"]))),ne=n(10),re=Object(ne.a)((function(e){return e.catalog}),(function(e){return e.products})),ae=l.default.input(p||(p=Object(I.a)(["\n  width: 100%;\n  outline: none;\n  padding-left: 1rem;\n  border: 1px solid #2b99f2;\n  background: #eaf5fe;\n  color: #2b99f2;\n  font-weight: 700;\n  ::placeholder {\n    font-weight: 100;\n  }\n"]))),oe=function(){var e=Object(r.useRef)(""),t=Object(c.c)(re),n=Object(c.b)();return Object(r.useEffect)((function(){n(z())}),[n]),a.a.createElement(te,null,a.a.createElement(ae,{ref:e,type:"text",name:"",placeholder:"Search for products",onChange:function(){n(V(e.current.value))}}),t.length>0?a.a.createElement("div",{style:{color:"#2b99f2",paddingLeft:"1rem"}},"found ",t.length," products"):a.a.createElement("div",{style:{color:"#751057",paddingLeft:"1rem"}},"nothing found"),a.a.createElement(S.b,{full:!0,wrap:"true"},t.map((function(e){return a.a.createElement(S.a,{key:e.id,grow:1,shrink:1,basis:"50%"},a.a.createElement(ee,e))}))))},ie=l.default.div(y||(y=Object(I.a)(["\n  margin-top: 24px;\n  margin-bottom: 24px;\n"]))),ce=Object(ne.a)((function(e){return e.cart}),(function(e){return e.items})),le=Object(l.default)(S.b)(b||(b=Object(I.a)(["\n  background-color: #f6f5f5;\n  height: 100%;\n"]))),de=l.default.img(g||(g=Object(I.a)(["\n  height: 75px;\n  width: 100%;\n"]))),ue=l.default.div(h||(h=Object(I.a)(["\n  padding: 0px 16px;\n  text-align: center;\n"]))),fe=l.default.h4(v||(v=Object(I.a)(["\n  margin: 0;\n"]))),se=l.default.button(w||(w=Object(I.a)(["\n  background: #eaf5fe;\n  color: #2b99f2;\n  padding: 2px;\n  margin-left: 0.95rem;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n"]))),me=l.default.div(j||(j=Object(I.a)(["\n  margin: 0 auto;\n  display: flex;\n  width: 10rem;\n  font-size: 0.8rem;\n  justify-content: space-around;\n  align-items: center;\n"]))),pe=l.default.button(x||(x=Object(I.a)(["\n  font-size: 1.75rem;\n  background: none;\n  border: none;\n  outline: none;\n  color: #2b99f2;\n  cursor: pointer;\n"]))),ye=function(e){var t=e.item,n=Object(c.b)();return a.a.createElement(S.b,{row:!0},a.a.createElement(S.a,{grow:1,shrink:1,basis:"25%"},a.a.createElement(de,{src:t.imgUrl,alt:t.name})),a.a.createElement(S.a,{grow:1,shrink:1,basis:"30%"},a.a.createElement(ue,null,a.a.createElement(fe,null,t.name))),a.a.createElement(S.a,{grow:1,shrink:1,basis:"40%"},a.a.createElement(me,null,a.a.createElement(pe,{onClick:function(){n(D(t)),n(G({item:t}))}},"\u2013"),a.a.createElement("h2",{style:{margin:"0"}},t.quantity),a.a.createElement(pe,{style:0===t.inventory?{pointerEvents:"none",opacity:"0.5"}:{},onClick:function(){n(T({product:t})),n(J({product:t}))}},"+"))),a.a.createElement(S.a,{grow:1,shrink:1,basis:"5%"},a.a.createElement(fe,null,"$".concat(t.totalPrice))),a.a.createElement(se,{onClick:function(){n(A({itemToDelete:t})),n($({item:t,quantity:t.quantity}))}},"DEL"))},be=function(){var e=Object(c.c)(ce),t=Object(c.c)((function(e){return e.cart})),n=t.totalQuantity,r=t.totalSum;return a.a.createElement(le,{column:!0,full:!0},a.a.createElement(te,null,a.a.createElement("h2",null,"Cart (",n,")"),e&&e.map((function(e){return a.a.createElement(ie,{key:e.id},a.a.createElement(ye,{item:e}))})),n>0&&a.a.createElement("h2",null,"Total Price: ",r)))},ge=Object(l.default)(S.b)(E||(E=Object(I.a)([""]))),he=function(){return a.a.createElement(ge,null,a.a.createElement(S.a,{basis:"60%"},a.a.createElement(oe,null)),a.a.createElement(S.a,{basis:"40%"},a.a.createElement(be,null)))},ve=Object(B.a)({devTools:!0,preloadedState:{},reducer:{catalog:K,cart:M}}),we={primary:"#2491eb",secondary:"#ddeaf6",tertiary:"#edf7ff",primaryFocus:"#147ed6",primaryActive:"#146fba",primaryHover:"#3b9ef0",secondaryFocus:"#ddeaf6",secondaryActive:" #c7e2f7",secondaryHover:"#eef4f9",primaryBg:"#2491eb",secondaryBg:"#ddeaf6",tertiaryBg:"#edf7ff",neutralDarker:"#5f5f5f",neutrayDark:"#5f5f5f",neutral:"#989898",neutralLight:"#dadada",neutralLighter:"#e2e2e2",neutralLightest:"#f0f0f0",redPrimary:"#cc3c3c",redTertiary:"#ffcdcd",white:"#ffffff",black:"#333333",blue:"#2491eb",red:"#cc3c3c",yellow:"#fffadd",gray:"#989898",lightGray:"#dadada",darkGray:"#5f5f5f",grayPrimary:"#5f5f5f",graySecondary:"#989898",grayTertiary:"#e9e8e8",grayTertiaryHover:"#f0f0f0",grayTertiaryActive:"#d8d8d8",grayTertiaryFocus:"#e2e2e2"},je={},xe={xsm:"12px",sm:"14px",md:"16px",lg:"20px",xlg:"24px"},Ee=n(20),Oe=n.n(Ee),ke=n(21),Pe=n.n(ke),Ie=n(22),Se=n.n(Ie),Ce=n(23),Be=n.n(Ce),qe=n(24),Fe=n.n(qe),Te=n(25),De=n.n(Te),Ae=n(26),Me=n.n(Ae),Ue=Object(l.css)(O||(O=Object(I.a)(["\n    @font-face {\n        font-family: 'Inter';\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url(",") format('woff2'),\n            url(",") format('woff');\n    }\n\n    @font-face {\n        font-family: 'Inter';\n        font-style: italic;\n        font-weight: 400;\n        font-display: swap;\n        src: url(",") format('woff2'),\n            url(",") format('woff');\n    }\n\n    @font-face {\n        font-family: 'Inter';\n        font-style: normal;\n        font-weight: 700;\n        font-display: swap;\n        src: url(",") format('woff2'),\n            url(",") format('woff');\n    }\n"])),Se.a,Pe.a,Fe.a,Be.a,Me.a,De.a),He=Oe()({black:"#000",fontFamilyBase:'Inter, Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',fontFamilyMonospace:'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',fontSizeBase:"16px",fontWeightBase:400,lineHeightBase:1.5,bodyColor:we.black,bodyBg:we.white,headingsMarginBottom:"0.5rem",paragraphMarginBottom:"1rem",labelMarginBottom:"0.5rem",dtFontWeight:700,linkColor:we.primaryFocus,linkDecoration:"none",linkHoverColor:we.primaryHover,linkHoverDecoration:"none",tableCellPadding:"0.75rem",textMuted:we.gray}),Le=Object(l.css)(k||(k=Object(I.a)(["\n  ","\n  ","\n\n    body {\n    background-color: ",';\n    max-width: 100vw;\n    overflow-x: hidden;\n    font-family: "Inter";\n    font-style: normal;\n    font-weight: 400;\n  }\n'])),He,Ue,we.white),Qe=Object(l.createGlobalStyle)(P||(P=Object(I.a)(["\n  ","\n"])),Le),We={colors:we,vars:je,sizes:xe};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.ThemeProvider,{theme:We},a.a.createElement(c.a,{store:ve},a.a.createElement(Qe,null),a.a.createElement(he,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.580cfeff.chunk.js.map