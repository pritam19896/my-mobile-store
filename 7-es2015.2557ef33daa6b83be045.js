(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{zrKR:function(t,o,e){"use strict";e.r(o),e.d(o,"TodosModule",(function(){return g}));var s=e("ofXK"),r=e("tyNb"),i=e("XNiG"),n=e("1G5W"),c=e("fXoL"),p=e("z6cu"),d=e("JIr8"),b=e("tk/3");let u=(()=>{class t{constructor(t){this.http=t}getTodos(){return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(Object(d.a)(this.handleError))}getTodo(t){return this.http.get("https://jsonplaceholder.typicode.com/posts/"+t).pipe(Object(d.a)(this.handleError))}createTodo(t,o,e){return this.http.post("https://jsonplaceholder.typicode.com/posts",{userId:t,title:o,body:e}).pipe(Object(d.a)(this.handleError))}updateTodo(t,o,e,s){return this.http.put("https://jsonplaceholder.typicode.com/posts/"+t,{id:t,userId:o,title:e,body:s}).pipe(Object(d.a)(this.handleError))}deleteTodo(t){return this.http.delete("https://jsonplaceholder.typicode.com/posts/"+t).pipe(Object(d.a)(this.handleError))}handleError(t){let o="";return o=t.error instanceof ErrorEvent?"Client side error -> "+t.error:`Status: ${t.status}, body: ${t.error}`,Object(p.a)(o)}}return t.\u0275fac=function(o){return new(o||t)(c.Qb(b.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function l(t,o){if(1&t&&(c.Mb(0,"ul"),c.Mb(1,"li"),c.rc(2),c.Lb(),c.Mb(3,"li"),c.rc(4),c.Lb(),c.Mb(5,"li"),c.rc(6),c.Lb(),c.Mb(7,"li"),c.rc(8),c.Lb(),c.Lb()),2&t){const t=o.$implicit;c.zb(2),c.tc("userId: ",t.userId,""),c.zb(2),c.tc("id: ",t.id,""),c.zb(2),c.tc("title: ",t.title,""),c.zb(2),c.tc("body: ",t.body,"")}}function a(t,o){if(1&t&&(c.Mb(0,"div"),c.pc(1,l,9,4,"ul",1),c.Lb()),2&t){const t=o.ngIf;c.zb(1),c.ec("ngForOf",t)}}const h=[{path:"",component:(()=>{class t{constructor(t){this.todoService=t,this.unsubscription$=new i.a}ngOnInit(){this.todos$=this.todoService.getTodos(),this.todoService.getTodo(2).pipe(Object(n.a)(this.unsubscription$)).subscribe(t=>{console.log(t)}),this.todoService.createTodo(1,"hello","this is my first todo").pipe(Object(n.a)(this.unsubscription$)).subscribe(t=>{console.log(t)}),this.todoService.updateTodo(1,1,"updated todo","new body").pipe(Object(n.a)(this.unsubscription$)).subscribe(t=>{console.log("Updated todo -> ",t)}),this.todoService.deleteTodo(1).pipe(Object(n.a)(this.unsubscription$)).subscribe(t=>{console.log("Deleted todo -> ",t)})}ngOnDestroy(){this.unsubscription$.next(),this.unsubscription$.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(c.Jb(u))},t.\u0275cmp=c.Db({type:t,selectors:[["app-todos"]],decls:4,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(t,o){1&t&&(c.Mb(0,"p"),c.rc(1,"todos works!"),c.Lb(),c.pc(2,a,2,1,"div",0),c.Xb(3,"async")),2&t&&(c.zb(2),c.ec("ngIf",c.Yb(3,1,o.todos$)))},directives:[s.n,s.m],pipes:[s.b],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(o){return new(o||t)},imports:[[r.e.forChild(h)],r.e]}),t})();var y=e("PCNd");let g=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(o){return new(o||t)},imports:[[s.c,y.a,f]]}),t})()}}]);