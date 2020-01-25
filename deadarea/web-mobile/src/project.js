window.__require=function t(e,n,o){function i(s,a){if(!n[s]){if(!e[s]){var h=s.split("/");if(h=h[h.length-1],!e[h]){var p="function"==typeof __require&&__require;if(!a&&p)return p(h,!0);if(c)return c(h,!0);throw new Error("Cannot find module '"+s+"'")}}var r=n[s]={exports:{}};e[s][0].call(r.exports,function(t){return i(e[s][1][t]||t)},r,r.exports,t,e,n,o)}return n[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<o.length;s++)i(o[s]);return i}({bg:[function(t,e,n){"use strict";cc._RF.push(e,"c5cd8+75+FPQJ+A6kPmpNKj","bg"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],boss:[function(t,e,n){"use strict";cc._RF.push(e,"15b099nR81PlItGzYWBtCaQ","boss"),cc.Class({extends:cc.Component,properties:{hp:100},onLoad:function(){cc.director.getCollisionManager().enabled=!0,this.anim=this.getComponent(cc.Animation),this.stone=cc.find("Canvas/stone").getComponent("stone")},onCollisionEnter:function(t,e){console.log("hp"+this.hp),0==t.tag&&(this.hp-=1)},move_one:function(){this.anim.play("boss");var t=cc.moveTo(1,0,167),e=cc.moveTo(1,400,-62);this.scheduleOnce(function(){this.node.runAction(cc.sequence(t,e))},3),this.scheduleOnce(function(){this.stone.node.runAction(cc.moveBy(1.5,1e3,0))},1)},move_two:function(){this.anim.play("boss");var t=cc.moveTo(1,0,167),e=cc.moveTo(1,-400,-62);this.scheduleOnce(function(){this.node.runAction(cc.sequence(t,e))},3),this.scheduleOnce(function(){this.stone.node.runAction(cc.moveBy(1.5,-1e3,0))},1)},start:function(){this.schedule(this.move_one,12,50,1),this.schedule(this.move_two,12,50,7)},update:function(t){(this.node.x>=0?this.node.scaleX=1:this.node.x<=0&&(this.node.scaleX=-1),this.hp<0)&&(cc.find("Canvas").getComponent("two").talk.active=!0,this.node.removeFromParent())}}),cc._RF.pop()},{}],bullet2:[function(t,e,n){"use strict";cc._RF.push(e,"4f7f617dphDMbGA/0Bxm8fP","bullet2"),cc.Class({extends:cc.Component,properties:{speed:2e3},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){},onCollisionEnter:function(t,e){1==t.tag&&this.node.removeFromParent()},update:function(t){(this.node.x>=500||this.node.x<=-500)&&this.node.removeFromParent(),this.node.x-=t*this.speed}}),cc._RF.pop()},{}],bullet:[function(t,e,n){"use strict";cc._RF.push(e,"60c8d+6uOZPcYp0ezB3RmzZ","bullet"),cc.Class({extends:cc.Component,properties:{speed:2e3},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){},onCollisionEnter:function(t,e){1==t.tag&&this.node.removeFromParent()},update:function(t){(this.node.x>=500||this.node.x<=-500)&&this.node.removeFromParent(),this.node.x+=t*this.speed}}),cc._RF.pop()},{}],chopper2:[function(t,e,n){"use strict";cc._RF.push(e,"ba403kUzPlI9qLvPrjxMm2s","chopper2"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],chopper:[function(t,e,n){"use strict";cc._RF.push(e,"03e98APIrpNq7Ys/UGFmhx5","chopper"),cc.Class({extends:cc.Component,properties:{hp:3,pre_fire:{type:cc.Prefab,default:null},pre_fire2:{type:cc.Prefab,default:null},root:{type:cc.Node,default:null}},move_up:function(){this.accLeft=!0},move_down:function(){this.accRight=!0},move_stop:function(){this.accLeft=!1,this.accRight=!1},shoot:function(){var t=cc.instantiate(this.pre_fire);this.root.addChild(t),this.playerPos=this.node.getPosition(),t.setPosition(this.playerPos),t.y-=20},move_jump:function(){this.fire.dir=-1;var t=cc.instantiate(this.pre_fire2);this.root.addChild(t),this.playerPos=this.node.getPosition(),t.setPosition(this.playerPos),t.y-=20},onCollisionEnter:function(t,e){this.node.y-=10,1==t.tag&&(this.hp-=1)},onLoad:function(){this.fire=cc.find("Canvas/root/fire").getComponent("fire"),this.accLeft=!1,this.accRight=!1,console.log(this.fire.dir)},start:function(){var t=cc.find("Canvas/button/left").getComponent("left");t.node.on(cc.Node.EventType.TOUCH_START,this.move_up,this),t.node.on(cc.Node.EventType.TOUCH_END,this.move_stop,this);var e=cc.find("Canvas/button/right").getComponent("right");e.node.on(cc.Node.EventType.TOUCH_START,this.move_down,this),e.node.on(cc.Node.EventType.TOUCH_END,this.move_stop,this),cc.find("Canvas/button/shoot").getComponent("shoot").node.on(cc.Node.EventType.TOUCH_START,this.shoot,this);var n=cc.find("Canvas/button/jump").getComponent("jump");n.node.on(cc.Node.EventType.TOUCH_START,this.move_jump,this),n.node.on(cc.Node.EventType.TOUCH_END,this.jump_stop,this)},update:function(t){this.hp<0&&cc.director.loadScene("die"),this.accLeft?this.node.y+=6:this.accRight&&(this.node.y-=6),this.node.y<=-123&&(this.node.y=-123),this.node.y>=267&&(this.node.y=267)}}),cc._RF.pop()},{}],die:[function(t,e,n){"use strict";cc._RF.push(e,"8bd8c+OyzVILp5nQHOrlYUc","die"),cc.Class({extends:cc.Component,properties:{},die:function(){cc.director.loadScene("start")},start:function(){}}),cc._RF.pop()},{}],fire:[function(t,e,n){"use strict";cc._RF.push(e,"2ba915MwtBNl54lIkQA4nz/","fire"),cc.Class({extends:cc.Component,properties:{speed:2e3,dir:1},onCollisionEnter:function(t,e){1==t.tag&&this.node.removeFromParent()},onLoad:function(){cc.director.getCollisionManager().enabled=!0,this.act=cc.find("Canvas/chopper").getComponent("chopper")},start:function(){},update:function(t){(this.node.x>=500||this.node.x<=-500)&&this.node.removeFromParent(),this.node.x+=this.dir*t*this.speed}}),cc._RF.pop()},{}],fly:[function(t,e,n){"use strict";cc._RF.push(e,"ea0c1qV29JPwpETXeLYCazI","fly"),cc.Class({extends:cc.Component,properties:{speed:1,hp:3},runx:function(){this.node.x>this.player.node.x?(this.node.scaleX=1,this.node.x-=this.speed):this.node.x<this.player.node.x&&(this.node.scaleX=-1,this.node.x+=this.speed)},runy:function(){this.node.y>this.player.node.y?this.node.y-=this.speed/4:this.node.y<this.player.node.y&&(this.node.y+=this.speed/4),this.hp<0&&(this.node.y-=30)},onCollisionEnter:function(t,e){this.anim.play("flyhit"),0==t.tag&&(this.hp-=1)},onLoad:function(){this.anim=this.getComponent(cc.Animation),this.player=cc.find("Canvas/chopper").getComponent("chopper"),cc.director.getCollisionManager().enabled=!0},start:function(){},update:function(t){this.runx(),this.runy()}}),cc._RF.pop()},{}],"game 1":[function(t,e,n){"use strict";cc._RF.push(e,"f9cbce2sk5OMrbFCvgB4mQF","game 1"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.player=cc.find("Canvas/player"),this.two=!1,this.one=!0,this.talk=cc.find("Canvas/talk"),this.talk.active=!1,this.scheduleOnce(this.talk_in,1)},talk_in:function(){this.talk.active=!0},talk_out:function(){this.talk.active=!1,console.log("ok")},start:function(){},update:function(t){var e=this.player.getComponent("player");e.node.x>=500&&(1==this.one?cc.director.loadScene("one"):0==this.one&&(e.node.x=500)),e.node.x<=-500&&(1==this.two?cc.director.loadScene("two"):0==this.two&&(e.node.x=-500))}}),cc._RF.pop()},{}],game:[function(t,e,n){"use strict";cc._RF.push(e,"abec8f9iFdApKikK6DP3o2v","game"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.two=!0,this.one=!1,this.talk=cc.find("Canvas/talk"),this.talk.active=!1,this.npc=cc.find("Canvas/npc"),this.npc.active=!1,this.player=cc.find("Canvas/player"),this.player.active=!1,this.anim=cc.find("Canvas/Humvee").getComponent(cc.Animation),this.anim.play("begin"),this.scheduleOnce(this.begin,3),this.scheduleOnce(this.talk_in,4)},begin:function(){this.npc=cc.find("Canvas/npc"),this.npc.active=!0,this.player=cc.find("Canvas/player"),this.player.active=!0},talk_in:function(){this.talk.active=!0},talk_out:function(){this.talk.active=!1,console.log("ok")},start:function(){},update:function(t){var e=this.player.getComponent("player");e.node.x>=500&&(1==this.one?cc.director.loadScene("one"):0==this.one&&(e.node.x=500)),e.node.x<=-500&&(1==this.two?cc.director.loadScene("two"):0==this.one&&(e.node.x=-500))}}),cc._RF.pop()},{}],jump:[function(t,e,n){"use strict";cc._RF.push(e,"37ecavukthNCIb5iryzNARc","jump"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],left:[function(t,e,n){"use strict";cc._RF.push(e,"128c5cjEKlEa74ldixTCpEG","left"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},update:function(t){}}),cc._RF.pop()},{}],monster:[function(t,e,n){"use strict";cc._RF.push(e,"306e1PggDFBJqQICVY6d2/t","monster"),cc.Class({extends:cc.Component,properties:{hp:50},chopperin:function(){var t=cc.moveTo(5,0,0);this.chopper.node.runAction(t)},talk:function(){cc.find("Canvas").getComponent("one").talk.active=!0},onLoad:function(){cc.director.getCollisionManager().enabled=!0,this.anim=this.getComponent(cc.Animation),this.anim.play("monsterin"),this.chopper=cc.find("Canvas/chopper").getComponent("chopper2")},ani_play:function(){this.anim.play("monstermove")},start:function(){this.scheduleOnce(this.ani_play,1.5)},onCollisionEnter:function(t,e){console.log("hp"+this.hp),0==t.tag&&(this.hp-=1)},update:function(t){this.hp<0&&(this.node.removeFromParent(),this.scheduleOnce(this.chopperin,1.5),this.scheduleOnce(this.talk,6))}}),cc._RF.pop()},{}],one:[function(t,e,n){"use strict";cc._RF.push(e,"615f4GUi5VLDLdRCpivRtff","one"),cc.Class({extends:cc.Component,properties:{pre_zombie:{type:cc.Prefab,default:null},arr:{type:cc.Node,default:[]},pre_monster:{type:cc.Prefab,default:null}},zombie_get:function(){return this.pool.size()>0?this.pool.get():cc.instantiate(this.pre_zombie)},zombie_put:function(t){this.pool.put(t)},gen_zombie:function(){var t=this.zombie_get(),e=Math.floor(900*Math.random()-500);t.setPosition(cc.v2(e,-80)),this.node.addChild(t)},gen_monster:function(){var t=cc.instantiate(this.pre_monster);t.setPosition(cc.v2(386,-78)),this.node.addChild(t)},talk_out:function(){this.talk.active=!1,console.log("ok"),cc.director.loadScene("three")},onLoad:function(){this.player=cc.find("Canvas/player"),this.pool=new cc.NodePool;for(var t=0;t<30;t++){var e=cc.instantiate(this.pre_zombie);this.pool.put(e),this.arr.push(e)}this.talk=cc.find("Canvas/talk"),this.talk.active=!1},start:function(){this.schedule(this.gen_zombie,1,30),this.scheduleOnce(this.gen_monster,35)},update:function(t){var e=this.player.getComponent("player");e.node.x>=500?e.node.x=500:e.node.x<=-480&&(e.node.x=-480)}}),cc._RF.pop()},{}],player:[function(t,e,n){"use strict";cc._RF.push(e,"1a108Rp2HZDVLjeM5sGjT4T","player"),cc.Class({extends:cc.Component,properties:{hp:3,maxMoveSpeed:0,accel:0,pre_bullet:{type:cc.Prefab,default:null},pre_bullet2:{type:cc.Prefab,default:null},bulletroot:{type:cc.Node,default:null},stand:{type:cc.SpriteFrame,default:null}},onCollisionEnter:function(t,e){this.anim.play("hit"),1==t.tag&&(this.hp-=1)},move_left:function(){this.anim.play("run"),this.node.scaleX=-1,this.accLeft=!0},move_right:function(){this.anim.play("run"),this.node.scaleX=1,this.accRight=!0},move_jump:function(){if(!this.jump){var t=cc.moveBy(.3,cc.v2(0,160)).easing(cc.easeCubicActionOut()),e=cc.moveBy(.3,cc.v2(0,-160)).easing(cc.easeCubicActionIn()),n=cc.callFunc(function(){this.jump=!0}.bind(this),this),o=cc.callFunc(function(){this.jump=!1}.bind(this),this),i=cc.sequence(n,t,e,o);this.node.runAction(i)}},shoot:function(){this.anim.play("shoot"),1==this.node.scaleX?(this.bullet=cc.instantiate(this.pre_bullet),this.bulletroot.addChild(this.bullet),this.playerPos=this.node.getPosition(),this.bullet.setPosition(this.playerPos),this.bullet.x+=20,this.bullet.y+=40):-1==this.node.scaleX&&(this.bullet2=cc.instantiate(this.pre_bullet2),this.bulletroot.addChild(this.bullet2),this.playerPos=this.node.getPosition(),this.bullet2.setPosition(this.playerPos),this.bullet2.x-=20,this.bullet2.y+=40)},move_stop:function(){this.accLeft=!1,this.accRight=!1,this.jump=!1;var t=this.node.getComponent(cc.Sprite);this.anim.stop("run"),t.spriteFrame=this.stand},jump_stop:function(){},onLoad:function(){cc.director.getCollisionManager().enabled=!0,this.accLeft=!1,this.accRight=!1,this.jump=!1,this.xSpeed=0,this.anim=this.getComponent(cc.Animation)},start:function(){var t=cc.find("Canvas/button/left").getComponent("left");t.node.on(cc.Node.EventType.TOUCH_START,this.move_left,this),t.node.on(cc.Node.EventType.TOUCH_END,this.move_stop,this);var e=cc.find("Canvas/button/right").getComponent("right");e.node.on(cc.Node.EventType.TOUCH_START,this.move_right,this),e.node.on(cc.Node.EventType.TOUCH_END,this.move_stop,this);var n=cc.find("Canvas/button/jump").getComponent("jump");n.node.on(cc.Node.EventType.TOUCH_START,this.move_jump,this),n.node.on(cc.Node.EventType.TOUCH_END,this.jump_stop,this);var o=cc.find("Canvas/button/shoot").getComponent("shoot");o.node.on(cc.Node.EventType.TOUCH_START,this.shoot,this),o.node.on(cc.Node.EventType.TOUCH_END,this.shoot,this)},update:function(t){this.hp<0&&cc.director.loadScene("die"),this.accLeft?this.node.x-=4:this.accRight&&(this.node.x+=4)}}),cc._RF.pop()},{}],right:[function(t,e,n){"use strict";cc._RF.push(e,"e7659v0hqNHx5q00vevnub+","right"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],shoot:[function(t,e,n){"use strict";cc._RF.push(e,"38052i5i51BDqoB4/3RNOGL","shoot"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],start:[function(t,e,n){"use strict";cc._RF.push(e,"51a01mnqfpK+4Tq8icI0COU","start"),cc.Class({extends:cc.Component,properties:{},die:function(){cc.director.loadScene("story")},start:function(){}}),cc._RF.pop()},{}],stone:[function(t,e,n){"use strict";cc._RF.push(e,"e107czIbqhMhJpZcaGrQBnr","stone"),cc.Class({extends:cc.Component,properties:{hp:9999},onLoad:function(){cc.director.getCollisionManager().enabled=!0},onCollisionEnter:function(t,e){console.log("hp"+this.hp),0==t.tag&&(this.hp-=1)},start:function(){}}),cc._RF.pop()},{}],story:[function(t,e,n){"use strict";cc._RF.push(e,"b4918611/dKVbqqKv+1Wf+T","story"),cc.Class({extends:cc.Component,properties:{},die:function(){cc.director.loadScene("city")},start:function(){}}),cc._RF.pop()},{}],success:[function(t,e,n){"use strict";cc._RF.push(e,"39adc+Zhm1Kc7iaQ5GZE9pv","success"),cc.Class({extends:cc.Component,properties:{},success:function(){cc.director.loadScene("start")},start:function(){}}),cc._RF.pop()},{}],three:[function(t,e,n){"use strict";cc._RF.push(e,"77c80eJ5iRMFr0axcHrTR0u","three"),cc.Class({extends:cc.Component,properties:{pre_zombie:{type:cc.Prefab,default:null},arr:{type:cc.Node,default:[]}},zombie_get:function(){return this.pool.size()>0?this.pool.get():cc.instantiate(this.pre_zombie)},gen_zombie:function(){var t=[1,-1],e=this.zombie_get(),n=Math.floor(520*Math.random()-100),o=500*t[Math.floor(Math.random()*t.length)];console.log(o),e.setPosition(cc.v2(o,n)),this.node.addChild(e)},talk_in:function(){this.talk.active=!0},success:function(){cc.director.loadScene("success")},onLoad:function(){this.talk=cc.find("Canvas/talk"),this.talk.active=!1,this.pool=new cc.NodePool;for(var t=0;t<30;t++){var e=cc.instantiate(this.pre_zombie);this.pool.put(e),this.arr.push(e)}},start:function(){this.schedule(this.gen_zombie,2,20),this.scheduleOnce(this.talk_in,49)}}),cc._RF.pop()},{}],two:[function(t,e,n){"use strict";cc._RF.push(e,"ff9312ckTdD9pN+Zzk+aRCG","two"),cc.Class({extends:cc.Component,properties:{pre_zombie:{type:cc.Prefab,default:null},arr:{type:cc.Node,default:[]},pre_boss:{type:cc.Prefab,default:null}},talk_out:function(){this.talk.active=!1,console.log("ok"),cc.director.loadScene("city1")},zombie_get:function(){return this.pool.size()>0?this.pool.get():cc.instantiate(this.pre_zombie)},zombie_put:function(t){this.pool.put(t)},gen_zombie:function(){var t=this.zombie_get(),e=Math.floor(900*Math.random()-500);t.setPosition(cc.v2(e,-88)),this.node.addChild(t)},gen_boss:function(){var t=cc.instantiate(this.pre_boss);t.setPosition(cc.v2(-400,-62)),this.node.addChild(t)},onLoad:function(){this.player=cc.find("Canvas/player"),this.pool=new cc.NodePool;for(var t=0;t<30;t++){var e=cc.instantiate(this.pre_zombie);this.pool.put(e),this.arr.push(e)}this.talk=cc.find("Canvas/talk"),this.talk.active=!1},start:function(){this.schedule(this.gen_zombie,2,20),this.scheduleOnce(this.gen_boss,20)},update:function(t){var e=this.player.getComponent("player");e.node.x>=480?e.node.x=480:e.node.x<=-480&&(e.node.x=-480)}}),cc._RF.pop()},{}],zombie2:[function(t,e,n){"use strict";cc._RF.push(e,"2d1cd0aJ8BCbJI6qtyL5okk","zombie2"),cc.Class({extends:cc.Component,properties:{speed:2,hp:5},onLoad:function(){this.player=cc.find("Canvas/player").getComponent("player"),cc.director.getCollisionManager().enabled=!0},start:function(){},run:function(){this.node.x>this.player.node.x?(this.node.scaleX=1,this.node.x-=this.speed):this.node.x<this.player.node.x&&(this.node.scaleX=-1,this.node.x+=this.speed),this.hp<0&&this.node.removeFromParent()},onCollisionEnter:function(t,e){0==t.tag&&(this.hp-=1)},update:function(t){this.run()}}),cc._RF.pop()},{}],zombie:[function(t,e,n){"use strict";cc._RF.push(e,"78347JarLxJs5C/llC+krcc","zombie"),cc.Class({extends:cc.Component,properties:{speed:1,hp:5},run:function(){this.node.x>this.player.node.x?(this.node.scaleX=-1,this.node.x-=this.speed):this.node.x<this.player.node.x&&(this.node.scaleX=1,this.node.x+=this.speed),this.hp<0&&this.node.removeFromParent()},onCollisionEnter:function(t,e){0==t.tag&&(this.hp-=1)},onLoad:function(){this.player=cc.find("Canvas/player").getComponent("player2"),cc.director.getCollisionManager().enabled=!0},start:function(){},update:function(t){this.run()}}),cc._RF.pop()},{}]},{},["die","start","story","success","bg","chopper2","monster","one","zombie","bullet","bullet2","game 1","game","player","chopper","fire","fly","three","jump","left","right","shoot","boss","stone","two","zombie2"]);