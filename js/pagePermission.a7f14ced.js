(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagePermission"],{3252:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("switch-roles",{on:{change:e.handleRolesChange}})],1)},s=[],i=n("d225"),c=n("b0b4"),o=n("308d"),r=n("6bb5"),l=n("4e2b"),u=n("9ab4"),b=n("60a3"),h=n("8ee8"),p=function(e){function t(){return Object(i["a"])(this,t),Object(o["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"handleRolesChange",value:function(){this.$router.push({path:"/permission/index?"+ +new Date})}}]),t}(b["c"]);p=u["a"]([Object(b["a"])({components:{SwitchRoles:h["a"]}})],p);var d=p,f=d,v=n("0c7c"),w=Object(v["a"])(f,a,s,!1,null,null,null);t["default"]=w.exports},"8ee8":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("\n    "+e._s(e.$t("permission.roles"))+"： "+e._s(e.roles)+"\n  ")]),e._v("\n  "+e._s(e.$t("permission.switchRoles"))+"：\n  "),n("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[n("el-radio-button",{attrs:{label:"editor"}}),n("el-radio-button",{attrs:{label:"admin"}})],1)],1)},s=[],i=n("d225"),c=n("b0b4"),o=n("308d"),r=n("6bb5"),l=n("4e2b"),u=n("9ab4"),b=n("60a3"),h=n("9dba"),p=function(e){function t(){return Object(i["a"])(this,t),Object(o["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"roles",get:function(){return h["a"].roles}},{key:"switchRoles",get:function(){return this.roles[0]},set:function(e){var t=this;h["a"].ChangeRoles(e).then(function(){t.$emit("change")})}}]),t}(b["c"]);p=u["a"]([b["a"]],p);var d=p,f=d,v=n("0c7c"),w=Object(v["a"])(f,a,s,!1,null,null,null);t["a"]=w.exports}}]);