(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(30)},25:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),i=a.n(r),o=a(5),l=a(6),m=(a(25),a(19)),s=a(12),u=[{id:1,title:"The Art Of War",price:10.11,image:"https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg"},{id:2,title:"Civilization and Its Discontents",price:14.29,image:"https://images-na.ssl-images-amazon.com/images/I/51Jj12iMZnL._SX331_BO1,204,203,200_.jpg"},{id:3,title:"Influence: The Psychology of Persuasion",price:10.98,image:"https://images-na.ssl-images-amazon.com/images/I/512-B-1yXuL._SX331_BO1,204,203,200_.jpg"},{id:4,title:"Grokking Algorithms",price:40,image:"https://images-na.ssl-images-amazon.com/images/I/61uUPXbhMxL._SX397_BO1,204,203,200_.jpg"}],p=Object(n.createContext)(),d=Object(n.createContext)(),g=function(){var e=Object(n.useContext)(d);return c.a.createElement("div",{className:"navigation"},c.a.createElement(l.b,{to:"/"},"Products"),c.a.createElement(l.b,{to:"/cart"},"Cart ",c.a.createElement("span",null,e.length)))},E=function(e){return c.a.createElement("div",{className:"product"},c.a.createElement("img",{src:e.product.image,alt:"".concat(e.product.title," book")}),c.a.createElement("h1",{className:"title"},e.product.title),c.a.createElement("p",{className:"price"},"$",e.product.price),c.a.createElement("button",{onClick:function(){return e.addItem(e.product)}},"Add to cart"))},b=function(){var e=Object(n.useContext)(p),t=e.products,a=e.addItem;return c.a.createElement("div",{className:"products-container"},t.map(function(e){return c.a.createElement(E,{key:e.id,product:e,addItem:a})}))},v=function(e){return c.a.createElement("div",{className:"shopping-cart_item"},c.a.createElement("img",{src:e.image,alt:"".concat(e.title," book")}),c.a.createElement("div",null,c.a.createElement("h1",null,e.title),c.a.createElement("p",null,"$ ",e.price),c.a.createElement("button",null,"Remove from cart")))},h=function(){var e=Object(n.useContext)(d);return c.a.createElement("div",{className:"shopping-cart"},e.map(function(e){return c.a.createElement(v,Object.assign({key:e.id},e))}),c.a.createElement("div",{className:"shopping-cart__checkout"},c.a.createElement("p",null,"Total: $",e.reduce(function(e,t){return e+t.price},0).toFixed(2)),c.a.createElement("button",null,"Checkout")))};var f=function(){var e=Object(n.useState)(u),t=Object(s.a)(e,1)[0],a=Object(n.useState)([]),r=Object(s.a)(a,2),i=r[0],l=r[1];return c.a.createElement(p.Provider,{value:{products:t,addItem:function(e){l([].concat(Object(m.a)(i),[e]))}}},c.a.createElement(d.Provider,{value:i},c.a.createElement("div",{className:"App"},c.a.createElement(g,{cart:i}),c.a.createElement(o.a,{exact:!0,path:"/",component:b}),c.a.createElement(o.a,{path:"/cart",render:function(){return c.a.createElement(h,{cart:i})}}))))},j=Object(o.e)(f);i.a.render(c.a.createElement(l.a,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.92204767.chunk.js.map