(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{jC4P:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),i=u("gIcY"),d=u("3FdN"),o=u("jeoQ"),s=u("zKQG"),r=u("jJjB"),c=u("6bMv"),m=u("y+xJ"),p=u("fNGB"),g=u("4Jtj"),h=u("rX1C"),f=u("Izlp"),v=u("D2gF"),b=u("7W/L"),y=t["\u0275crt"]({encapsulation:0,styles:[".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"],data:{}});function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","agm-map-container-inner sebm-google-map-container-inner"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"div",[["class","agm-map-content"]],null,null,null,null,null)),t["\u0275ncd"](null,0)],null,null)}var C=u("j5V/"),I=u("Ip0R"),N=(u("M0ag"),function(){function l(l,n,u){this.route=l,this.modalService=n,this.db=u,this.markersbox=[{lat:16.743593,lng:100.20413},{lat:16.74517,lng:100.20469},{lat:16.74731,lng:100.2053},{lat:16.74941,lng:100.2039},{lat:16.75076,lng:100.2031},{lat:16.75304,lng:100.202},{lat:16.75639,lng:100.201},{lat:16.75808,lng:100.1998},{lat:16.75682,lng:100.1953},{lat:16.75451,lng:100.1958},{lat:16.753069,lng:100.1961},{lat:16.75191,lng:100.1962},{lat:16.75055,lng:100.1968},{lat:16.74872,lng:100.1975},{lat:16.74689,lng:100.1982},{lat:16.74437,lng:100.1995},{lat:16.74445,lng:100.2001},{lat:16.74591,lng:100.2023},{lat:16.7473,lng:100.2044}],this.markersgps=[{lat:16.743592,lng:100.204147},{lat:16.745179,lng:100.204666},{lat:16.747297,lng:100.205314},{lat:16.749406,lng:100.203961},{lat:16.750769,lng:100.203099},{lat:16.753075,lng:100.201987},{lat:16.756368,lng:100.201001},{lat:16.758048,lng:100.199838},{lat:16.75686,lng:100.195425},{lat:16.754493,lng:100.195803},{lat:16.753059,lng:100.196057},{lat:16.751926,lng:100.19622},{lat:16.750531,lng:100.196749},{lat:16.748712,lng:100.197491},{lat:16.746882,lng:100.198292},{lat:16.7443002,lng:100.199554},{lat:16.744433,lng:100.20012},{lat:16.745899,lng:100.202316},{lat:16.747249,lng:100.204467}],this.marker_icon={url:"../../../assets/images/marker_icon.svg",scaledSize:{width:60,height:60}},this.marker_iconBox={url:"../../../assets/images/map-markerbox.svg",scaledSize:{width:20,height:20}},this.marker_iconGPS={url:"../../../assets/images/map-markergps.svg",scaledSize:{width:20,height:20}},this.doughnutChartLabels=["Download Sales","In-Store Sales"],this.doughnutChartData=[2,98],this.notifyList=[]}return l.prototype.ngOnInit=function(){var l=this;this.isNotify=!0,this.paramMapnodeId=this.route.snapshot.paramMap.get("nodeId"),this.doughnutChartType="doughnut",this.nodeList=this.db.findNodemcuBycar_id(this.paramMapnodeId),this.gps=this.db.findGpsBycar_id(this.paramMapnodeId),this.nodeList.subscribe(function(n){var u=n.find(function(l){return!0===l.notify});u&&l.notificationFunction(u)}),this.nodeList.subscribe(function(n){var u=n.find(function(l){return l.battery<=25});u&&!0===u.bStatus&&(l.battery=u.battery,l.batteryNodeId=u.nodeId,l.batteryCar=u.car_id,l.batteryTime=u.timestamp,l.modalService.dismissAll(),l.modalService.open(l.lowBattery,{centered:!0}))})},l.prototype.notificationFunction=function(l){var n=this;!0===this.isNotify&&(this.notifyCar=l.car_id,this.notifyNodeId=l.nodeId,this.notifyTemp=l.temperature,this.notifyTime=l.timestamp,this.notifyMessage=l.temperature>l.hightLevel?"higher than":"below",this.modalService.dismissAll(),this.modalService.open(this.templateRef,{centered:!0}),this.db.saveNotify(l,this.notifyMessage),this.isNotify=!1,setTimeout(function(){n.isNotify=!0},2e3))},l.prototype.addNodeModal=function(l){this.modalService.open(l,{centered:!0})},l.prototype.addNewNode=function(){null!=this.nodeId&&this.db.addNode({nodeId:this.nodeId,car_id:this.paramMapnodeId}),this.nodeId=null,this.modalService.dismissAll()},l.prototype.getBattery=function(l){return l>75?1:l>50?2:l>25?3:4},l.prototype.deleteNode=function(){null!=this.deleteNodeid&&this.db.deleteNode(this.deleteNodeid),this.modalService.dismissAll(),this.deleteNodeid=null},l.prototype.deleteModel=function(l,n){this.deleteNodeid=n,this.modalService.open(l,{centered:!0})},l.prototype.setColor=function(l){return Math.abs(Date.now()-l)>1e5?"warning":"success"},l.prototype.checkData=function(l,n){return-1!==l?n:"null"},l}()),k=u("ZYCi"),w=u("4GxJ"),M=u("WAaD"),T=t["\u0275crt"]({encapsulation:0,styles:[["agm-map[_ngcontent-%COMP%]{height:500px}.b_Delete[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px;display:flex;justify-content:center}.exclamation[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:15px;display:block;margin-left:auto;margin-right:auto;width:50%}.dataImage[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:3px;display:block;margin-left:auto;margin-right:auto;width:50%}.verticalCenter[_ngcontent-%COMP%]{display:block;margin-top:auto;margin-bottom:auto;height:50%}.border-right[_ngcontent-%COMP%]{border-right:1px solid #a8a7a762}.dataText[_ngcontent-%COMP%]{text-align:center;font-weight:700}.value[_ngcontent-%COMP%]{font-size:120%}.name[_ngcontent-%COMP%]{font-size:80%}.tempData[_ngcontent-%COMP%]{position:relative;text-align:center;font-weight:700;height:33%;padding-top:15px}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h5",[["class","modal-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Notification"])),(l()(),t["\u0275eld"](3,0,null,null,24,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,0,"img",[["alt","exclamation"],["class","exclamation"],["height","120px"],["src","../../../assets/images/notification.svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,20,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,19,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Car : "])),(l()(),t["\u0275eld"](10,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](11,null,["",""])),(l()(),t["\u0275eld"](12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Node id : "])),(l()(),t["\u0275eld"](14,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](15,null,["",""])),(l()(),t["\u0275eld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Temperature : "])),(l()(),t["\u0275eld"](18,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](19,null,[""," \xb0C"])),(l()(),t["\u0275eld"](20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Timestamp : "])),(l()(),t["\u0275eld"](22,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](23,null,["",""])),(l()(),t["\u0275eld"](24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Notification : "])),(l()(),t["\u0275eld"](26,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](27,null,["The temperature is "," the specified value."])),(l()(),t["\u0275eld"](28,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,null,1,"button",[["class","btn btn-outline-dark"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.$implicit.close("Close click")&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Close"]))],null,function(l,n){var u=n.component;l(n,11,0,u.notifyCar),l(n,15,0,u.notifyNodeId),l(n,19,0,u.notifyTemp),l(n,23,0,u.notifyTime),l(n,27,0,u.notifyMessage)})}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h5",[["class","modal-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Notification"])),(l()(),t["\u0275eld"](3,0,null,null,24,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,0,"img",[["alt","exclamation"],["class","exclamation"],["height","120px"],["src","../../../assets/images/battery_4.svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,20,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,19,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Car : "])),(l()(),t["\u0275eld"](10,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](11,null,["",""])),(l()(),t["\u0275eld"](12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Node id : "])),(l()(),t["\u0275eld"](14,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](15,null,["",""])),(l()(),t["\u0275eld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Battery : "])),(l()(),t["\u0275eld"](18,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](19,null,[""," %"])),(l()(),t["\u0275eld"](20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Timestamp : "])),(l()(),t["\u0275eld"](22,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](23,null,["",""])),(l()(),t["\u0275eld"](24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Notification : "])),(l()(),t["\u0275eld"](26,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](27,null,["The node is running low ("," %) "])),(l()(),t["\u0275eld"](28,0,null,null,2,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,null,1,"button",[["class","btn btn-outline-dark"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.$implicit.close("Close click")&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Close"]))],null,function(l,n){var u=n.component;l(n,11,0,u.batteryCar),l(n,15,0,u.batteryNodeId),l(n,19,0,u.battery),l(n,23,0,u.batteryTime),l(n,27,0,u.battery)})}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Add new node"])),(l()(),t["\u0275eld"](3,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.$implicit.dismiss("Cross click")&&t),t},null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\xd7"])),(l()(),t["\u0275eld"](6,0,null,null,11,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,1,"label",[["class","col-3 control-label"],["for","inputName"],["style","text-align: right"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Node id"])),(l()(),t["\u0275eld"](11,0,null,null,6,"div",[["class","col-9"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,5,"input",[["class","form-control"],["name","nodeId"],["placeholder","node id"],["style","margin-bottom: 8px;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t["\u0275nov"](l,13)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,13).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,13)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,13)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(a.nodeId=u)&&e),e},null,null)),t["\u0275did"](13,16384,null,0,i.c,[t.Renderer2,t.ElementRef,[2,i.a]],null,null),t["\u0275prd"](1024,null,i.i,function(l){return[l]},[i.c]),t["\u0275did"](15,671744,null,0,i.n,[[8,null],[8,null],[8,null],[6,i.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,i.j,null,[i.n]),t["\u0275did"](17,16384,null,0,i.k,[[4,i.j]],null,null),(l()(),t["\u0275eld"](18,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,1,"button",[["class","btn btn-outline-success"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addNewNode()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Add"])),(l()(),t["\u0275eld"](21,0,null,null,1,"button",[["class","btn btn-outline-dark"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.$implicit.close("Close click")&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Close"]))],function(l,n){l(n,15,0,"nodeId",n.component.nodeId)},function(l,n){l(n,12,0,t["\u0275nov"](n,17).ngClassUntouched,t["\u0275nov"](n,17).ngClassTouched,t["\u0275nov"](n,17).ngClassPristine,t["\u0275nov"](n,17).ngClassDirty,t["\u0275nov"](n,17).ngClassValid,t["\u0275nov"](n,17).ngClassInvalid,t["\u0275nov"](n,17).ngClassPending)})}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"img",[["alt","exclamation"],["class","exclamation"],["height","120px"],["src","../../../assets/images/exclamation.svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h4",[["class","modal-title"],["style","text-align: center;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Delete"])),(l()(),t["\u0275eld"](4,0,null,null,1,"h6",[["style","text-align: center;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["Are you sure, You want to delete NodeId: ",""])),(l()(),t["\u0275eld"](6,0,null,null,4,"div",[["class","b_Delete"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-danger"],["style","margin: 10px"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteNode()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Delete"])),(l()(),t["\u0275eld"](9,0,null,null,1,"button",[["class","btn btn-outline-dark"],["style","margin: 10px"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.$implicit.close("Close click")&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Cancel"]))],null,function(l,n){l(n,5,0,n.component.deleteNodeid)})}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-outline-success"],["style","float: right"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.addNodeModal(t["\u0275nov"](l.parent,5))&&e),e},null,null)),(l()(),t["\u0275ted"](-1,null,[" Add new node "]))],null,null)}function B(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,16,"div",[["class","card card-signin my-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,15,"agm-map",[],[[2,"sebm-google-map-container",null]],null,null,x,y)),t["\u0275prd"](4608,null,s.a,s.a,[o.a,t.NgZone,d.a]),t["\u0275prd"](4608,null,r.a,r.a,[o.a,t.NgZone]),t["\u0275prd"](4608,null,c.a,c.a,[o.a,t.NgZone]),t["\u0275prd"](4608,null,m.a,m.a,[o.a,t.NgZone]),t["\u0275prd"](4608,null,p.a,p.a,[o.a,t.NgZone]),t["\u0275prd"](4608,null,g.a,g.a,[o.a,t.NgZone]),t["\u0275prd"](4608,null,h.a,h.a,[o.a,t.NgZone]),t["\u0275prd"](512,null,o.a,o.a,[f.a,t.NgZone]),t["\u0275prd"](512,null,v.b,v.b,[f.a]),t["\u0275did"](11,770048,null,0,b.a,[t.ElementRef,o.a,v.b],{longitude:[0,"longitude"],latitude:[1,"latitude"],zoom:[2,"zoom"]},null),t["\u0275prd"](512,null,d.a,d.a,[o.a,t.NgZone]),(l()(),t["\u0275eld"](13,0,null,0,3,"agm-marker",[],null,null,null,null,null)),t["\u0275prd"](6144,null,v.a,null,[C.a]),t["\u0275did"](15,1720320,null,1,C.a,[d.a],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),t["\u0275qud"](603979776,3,{infoWindow:1})],function(l,n){var u=n.component;l(n,11,0,n.context.$implicit.longitude,n.context.$implicit.latitude,15),l(n,15,0,n.context.$implicit.latitude,n.context.$implicit.longitude,u.marker_icon)},function(l,n){l(n,1,0,!0)})}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-outline-danger"],["style","float: Right; border:2px;"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.deleteModel(t["\u0275nov"](l.parent.parent,6),l.parent.context.$implicit.nodeId)&&e),e},null,null)),(l()(),t["\u0275ted"](-1,null,[" Delete "]))],null,null)}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt","batteryImage"],["class","dataImage"],["height","70px"],["src","../../../assets/images/battery_1.svg"]],null,null,null,null,null))],null,null)}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt","batteryImage"],["class","dataImage"],["height","70px"],["src","../../../assets/images/battery_2.svg"]],null,null,null,null,null))],null,null)}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt","batteryImage"],["class","dataImage"],["height","70px"],["src","../../../assets/images/battery_3.svg"]],null,null,null,null,null))],null,null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt","batteryImage"],["class","dataImage"],["height","70px"],["src","../../../assets/images/battery_4.svg"]],null,null,null,null,null))],null,null)}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,41,"div",[["class","conatainer"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,40,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,0,"div",[["class","col-xl-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,37,"div",[["class","col-xl-6"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,36,"div",[["class","card bg-light mb-3"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,8,"div",[["class","card-header"],["style","padding-top: 3px;padding-bottom: 2px"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,7,"h5",[],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,2,"small",[],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,["",""])),(l()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](11,16384,null,0,I.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](12,0,null,null,1,"small",[["style","float: Right; border:2px; font-size: 70%;"]],[[8,"className",0]],null,null,null,null)),(l()(),t["\u0275ted"](13,null,["Latest update : ",""])),(l()(),t["\u0275eld"](14,0,null,null,26,"div",[["class","card-body"],["style","padding-top: 2px;padding-bottom: 2px"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,12,"div",[["class","col-4 border-right"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](18,16384,null,0,I.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](20,16384,null,0,I.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,z)),t["\u0275did"](22,16384,null,0,I.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,L)),t["\u0275did"](24,16384,null,0,I.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](25,0,null,null,1,"h2",[["class","dataText value"]],null,null,null,null,null)),(l()(),t["\u0275ted"](26,null,[""," %"])),(l()(),t["\u0275eld"](27,0,null,null,1,"h6",[["class","dataText name"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Battery"])),(l()(),t["\u0275eld"](29,0,null,null,5,"div",[["class","col-4 border-right"]],null,null,null,null,null)),(l()(),t["\u0275eld"](30,0,null,null,0,"img",[["alt","temperatuerImage"],["class","dataImage"],["height","70px"],["src","../../../assets/images/temperature.svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](31,0,null,null,1,"h2",[["class","dataText value"]],null,null,null,null,null)),(l()(),t["\u0275ted"](32,null,[""," \xb0C"])),(l()(),t["\u0275eld"](33,0,null,null,1,"h6",[["class","dataText name"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Temperature"])),(l()(),t["\u0275eld"](35,0,null,null,5,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](36,0,null,null,0,"img",[["alt","temperatuerImage"],["class","dataImage"],["height","70px"],["src","../../../assets/images/humidity.svg"]],null,null,null,null,null)),(l()(),t["\u0275eld"](37,0,null,null,1,"h2",[["class","dataText value"]],null,null,null,null,null)),(l()(),t["\u0275ted"](38,null,[""," \xb0C"])),(l()(),t["\u0275eld"](39,0,null,null,1,"h6",[["class","dataText name"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["humidity"])),(l()(),t["\u0275eld"](41,0,null,null,0,"div",[["class","col-xl-3"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,11,0,"user"===u.db.role),l(n,18,0,1==u.getBattery(n.context.$implicit.battery)),l(n,20,0,2==u.getBattery(n.context.$implicit.battery)),l(n,22,0,3==u.getBattery(n.context.$implicit.battery)),l(n,24,0,4==u.getBattery(n.context.$implicit.battery))},function(l,n){var u=n.component;l(n,9,0,n.context.$implicit.nodeId),l(n,12,0,t["\u0275inlineInterpolate"](1,"btn btn-outline-",u.setColor(n.context.$implicit.checkStatus),"")),l(n,13,0,n.context.$implicit.timestamp),l(n,26,0,n.context.$implicit.battery),l(n,32,0,u.checkData(n.context.$implicit.humidity,n.context.$implicit.temperature)),l(n,38,0,u.checkData(n.context.$implicit.humidity,n.context.$implicit.humidity))})}function V(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{templateRef:0}),t["\u0275qud"](402653184,2,{lowBattery:0}),(l()(),t["\u0275eld"](2,0,null,null,18,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),t["\u0275and"](0,[[1,2],["notification",2]],null,0,null,_)),(l()(),t["\u0275and"](0,[[2,2],["lowBattery",2]],null,0,null,R)),(l()(),t["\u0275and"](0,[["content",2]],null,0,null,$)),(l()(),t["\u0275and"](0,[["DeleteModel",2]],null,0,null,D)),(l()(),t["\u0275eld"](7,0,null,null,4,"label",[["style","font-size: 150%"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Car id "])),(l()(),t["\u0275eld"](10,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t["\u0275ted"](11,null,["",""])),(l()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](13,16384,null,0,I.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](14,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,2,null,B)),t["\u0275did"](16,278528,null,0,I.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pid"](131072,I.b,[t.ChangeDetectorRef]),(l()(),t["\u0275and"](16777216,null,null,2,null,A)),t["\u0275did"](19,278528,null,0,I.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pid"](131072,I.b,[t.ChangeDetectorRef])],function(l,n){var u=n.component;l(n,13,0,"user"===u.db.role),l(n,16,0,t["\u0275unv"](n,16,0,t["\u0275nov"](n,17).transform(u.gps))),l(n,19,0,t["\u0275unv"](n,19,0,t["\u0275nov"](n,20).transform(u.nodeList)))},function(l,n){var u=n.component;l(n,2,0,void 0),l(n,11,0,u.paramMapnodeId)})}function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-nodes",[],null,null,null,V,T)),t["\u0275did"](1,114688,null,0,N,[k.a,w.z,M.a],null,null)],function(l,n){l(n,1,0)},null)}var j=t["\u0275ccf"]("app-nodes",N,Z,{},{},[]),J=u("9AJC"),G=function(){return function(){}}(),q=u("/fSM"),E=u("xdbM");u.d(n,"NodesModuleNgFactory",function(){return U});var U=t["\u0275cmf"](e,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,j,J.a,J.b,J.s,J.o,J.p,J.q,J.r]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,I.p,I.o,[t.LOCALE_ID,[2,I.B]]),t["\u0275mpd"](4608,i.u,i.u,[]),t["\u0275mpd"](4608,w.z,w.z,[t.ComponentFactoryResolver,t.Injector,w.hb,w.A]),t["\u0275mpd"](1073742336,I.c,I.c,[]),t["\u0275mpd"](1073742336,k.p,k.p,[[2,k.v],[2,k.l]]),t["\u0275mpd"](1073742336,G,G,[]),t["\u0275mpd"](1073742336,i.r,i.r,[]),t["\u0275mpd"](1073742336,i.g,i.g,[]),t["\u0275mpd"](1073742336,w.l,w.l,[]),t["\u0275mpd"](1073742336,w.d,w.d,[]),t["\u0275mpd"](1073742336,w.g,w.g,[]),t["\u0275mpd"](1073742336,w.h,w.h,[]),t["\u0275mpd"](1073742336,w.n,w.n,[]),t["\u0275mpd"](1073742336,w.t,w.t,[]),t["\u0275mpd"](1073742336,w.w,w.w,[]),t["\u0275mpd"](1073742336,w.B,w.B,[]),t["\u0275mpd"](1073742336,w.F,w.F,[]),t["\u0275mpd"](1073742336,w.I,w.I,[]),t["\u0275mpd"](1073742336,w.L,w.L,[]),t["\u0275mpd"](1073742336,w.P,w.P,[]),t["\u0275mpd"](1073742336,w.V,w.V,[]),t["\u0275mpd"](1073742336,w.Z,w.Z,[]),t["\u0275mpd"](1073742336,w.cb,w.cb,[]),t["\u0275mpd"](1073742336,w.db,w.db,[]),t["\u0275mpd"](1073742336,w.C,w.C,[]),t["\u0275mpd"](1073742336,q.a,q.a,[]),t["\u0275mpd"](1073742336,E.ChartsModule,E.ChartsModule,[]),t["\u0275mpd"](1073742336,e,e,[]),t["\u0275mpd"](1024,k.j,function(){return[[{path:"",component:N}]]},[])])})}}]);