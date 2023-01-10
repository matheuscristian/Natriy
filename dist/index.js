"use strict";function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}var _nodePath=require("node:path");var _nodeFs=require("node:fs");var _child_process=require("child_process");var _nodeProcess=require("node:process");var _promises=require("node:readline/promises");var _INIParser=require("./packages/main/INIParser");function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function _regeneratorRuntime(){return exports;};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value;},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator;}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,function(){return this;});var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);}):PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}reject(record.arg);}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}});}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult();}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg);}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done};}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg);}};}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(undefined===method)return context.delegate=null,"throw"===methodName&&delegate.iterator["return"]&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel);}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0);}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next;};return next.next=next;}}return{next:doneResult};}function doneResult(){return{value:undefined,done:!0};}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name));},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun;},exports.awrap=function(arg){return{__await:arg};},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,function(){return this;}),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,function(){return this;}),define(Gp,"toString",function(){return"[object Generator]";}),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next;}return next.done=!0,next;};},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined);},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval;},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc);}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record);},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel;}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel;}},exports;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var configFilePath=(0,_nodePath.join)(__dirname,"../natriy.cfg");function programStart(){var mainPackage="main";var mainClass="Program";var mainFilePath=(0,_nodePath.join)(__dirname,"./packages/".concat(mainPackage,"/").concat(mainClass,".js"));if(!(0,_nodeFs.existsSync)(mainFilePath)){throw new Error("class ".concat(mainPackage,"/").concat(mainClass," (").concat(mainFilePath,") doesn't exists."));}if(!(0,_nodeFs.existsSync)(configFilePath)){throw new Error("config file (".concat(configFilePath,") wasn't found."));}function spawnProgramProcess(){var newProcess=(0,_child_process.fork)(mainFilePath);newProcess.once("spawn",function(){newProcess.send("start",function(err){if(err)console.error(err);});});newProcess.once("error",function(err){console.error(err);});return newProcess;}var programProcess=spawnProgramProcess();var canUpdate=true;(0,_nodeFs.watch)(configFilePath,function(e){if(e=="rename"){throw new Error("config file (".concat(configFilePath,") was renamed."));}if(!programProcess.connected){programProcess=spawnProgramProcess();canUpdate=false;return;}if(canUpdate){programProcess.send("update",function(err){if(err)console.error(err);});canUpdate=false;return;}if(!canUpdate)canUpdate=true;});}var readLine=(0,_promises.createInterface)({input:_nodeProcess.stdin,output:_nodeProcess.stdout});_asyncToGenerator(_regeneratorRuntime().mark(function _callee(){var ans,config;return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:readLine.write("--> '1' to start bot\n--> '2' to register commands\n\n");_context.next=3;return readLine.question("What do you want to do?: ");case 3:ans=_context.sent;if(ans=='1'){console.log("Starting...");programStart();}else{config=(0,_INIParser.parse)(configFilePath);}readLine.close();case 6:case"end":return _context.stop();}},_callee);}))();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25maWdGaWxlUGF0aCIsImpvaW5QYXRoIiwiX19kaXJuYW1lIiwicHJvZ3JhbVN0YXJ0IiwibWFpblBhY2thZ2UiLCJtYWluQ2xhc3MiLCJtYWluRmlsZVBhdGgiLCJmaWxlRXhpc3RzIiwiRXJyb3IiLCJzcGF3blByb2dyYW1Qcm9jZXNzIiwibmV3UHJvY2VzcyIsImZvcmsiLCJvbmNlIiwic2VuZCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInByb2dyYW1Qcm9jZXNzIiwiY2FuVXBkYXRlIiwid2F0Y2hGaWxlIiwiZSIsImNvbm5lY3RlZCIsInJlYWRMaW5lIiwiY3JlYXRlSW50ZXJmYWNlIiwiaW5wdXQiLCJzdGRpbiIsIm91dHB1dCIsInN0ZG91dCIsIndyaXRlIiwicXVlc3Rpb24iLCJhbnMiLCJsb2ciLCJjb25maWciLCJwYXJzZUlOSSIsImNsb3NlIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW4gYXMgam9pblBhdGggfSBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBleGlzdHNTeW5jIGFzIGZpbGVFeGlzdHMsIHdhdGNoIGFzIHdhdGNoRmlsZSB9IGZyb20gXCJub2RlOmZzXCI7XG5pbXBvcnQgeyBmb3JrLCBDaGlsZFByb2Nlc3MgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgc3RkaW4sIHN0ZG91dCB9IGZyb20gXCJub2RlOnByb2Nlc3NcIlxuaW1wb3J0IHsgY3JlYXRlSW50ZXJmYWNlIH0gZnJvbSBcIm5vZGU6cmVhZGxpbmUvcHJvbWlzZXNcIjtcbmltcG9ydCB7IHBhcnNlIGFzIHBhcnNlSU5JIH0gZnJvbSBcIi4vcGFja2FnZXMvbWFpbi9JTklQYXJzZXJcIjtcblxuY29uc3QgY29uZmlnRmlsZVBhdGggPSBqb2luUGF0aChfX2Rpcm5hbWUsIFwiLi4vbmF0cml5LmNmZ1wiKTtcblxuZnVuY3Rpb24gcHJvZ3JhbVN0YXJ0KCk6IHZvaWQge1xuXHRjb25zdCBtYWluUGFja2FnZSA9IFwibWFpblwiO1xuXHRjb25zdCBtYWluQ2xhc3MgPSBcIlByb2dyYW1cIjtcblxuXHRjb25zdCBtYWluRmlsZVBhdGggPSBqb2luUGF0aChfX2Rpcm5hbWUsIGAuL3BhY2thZ2VzLyR7bWFpblBhY2thZ2V9LyR7bWFpbkNsYXNzfS5qc2ApO1xuXG5cdGlmICghZmlsZUV4aXN0cyhtYWluRmlsZVBhdGgpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBjbGFzcyAke21haW5QYWNrYWdlfS8ke21haW5DbGFzc30gKCR7bWFpbkZpbGVQYXRofSkgZG9lc24ndCBleGlzdHMuYCk7XG5cdH1cblxuXHRpZiAoIWZpbGVFeGlzdHMoY29uZmlnRmlsZVBhdGgpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBjb25maWcgZmlsZSAoJHtjb25maWdGaWxlUGF0aH0pIHdhc24ndCBmb3VuZC5gKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNwYXduUHJvZ3JhbVByb2Nlc3MoKTogQ2hpbGRQcm9jZXNzIHtcblx0XHRjb25zdCBuZXdQcm9jZXNzID0gZm9yayhtYWluRmlsZVBhdGgpO1xuXG5cdFx0bmV3UHJvY2Vzcy5vbmNlKFwic3Bhd25cIiwgKCkgPT4ge1xuXHRcdFx0bmV3UHJvY2Vzcy5zZW5kKFwic3RhcnRcIiwgKGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdG5ld1Byb2Nlc3Mub25jZShcImVycm9yXCIsIChlcnIpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBuZXdQcm9jZXNzO1xuXHR9XG5cblx0bGV0IHByb2dyYW1Qcm9jZXNzID0gc3Bhd25Qcm9ncmFtUHJvY2VzcygpO1xuXG5cdGxldCBjYW5VcGRhdGUgPSB0cnVlO1xuXHR3YXRjaEZpbGUoY29uZmlnRmlsZVBhdGgsIChlKSA9PiB7XG5cdFx0aWYgKGUgPT0gXCJyZW5hbWVcIikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBjb25maWcgZmlsZSAoJHtjb25maWdGaWxlUGF0aH0pIHdhcyByZW5hbWVkLmApO1xuXHRcdH1cblxuXHRcdGlmICghcHJvZ3JhbVByb2Nlc3MuY29ubmVjdGVkKSB7XG5cdFx0XHRwcm9ncmFtUHJvY2VzcyA9IHNwYXduUHJvZ3JhbVByb2Nlc3MoKTtcblx0XHRcdGNhblVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChjYW5VcGRhdGUpIHtcblx0XHRcdHByb2dyYW1Qcm9jZXNzLnNlbmQoXCJ1cGRhdGVcIiwgKGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y2FuVXBkYXRlID0gZmFsc2U7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFjYW5VcGRhdGUpIGNhblVwZGF0ZSA9IHRydWU7XG5cdH0pO1xufVxuXG5jb25zdCByZWFkTGluZSA9IGNyZWF0ZUludGVyZmFjZSh7IGlucHV0OiBzdGRpbiwgb3V0cHV0OiBzdGRvdXQgfSk7XG5cbihhc3luYyAoKSA9PiB7XG5cdHJlYWRMaW5lLndyaXRlKFwiLS0+ICcxJyB0byBzdGFydCBib3RcXG4tLT4gJzInIHRvIHJlZ2lzdGVyIGNvbW1hbmRzXFxuXFxuXCIpO1xuXHRjb25zdCBhbnMgPSBhd2FpdCByZWFkTGluZS5xdWVzdGlvbihcIldoYXQgZG8geW91IHdhbnQgdG8gZG8/OiBcIik7XG5cblx0aWYgKGFucyA9PSAnMScpIHtcblx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0aW5nLi4uXCIpO1xuXHRcdHByb2dyYW1TdGFydCgpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGNvbmZpZyA9IHBhcnNlSU5JKGNvbmZpZ0ZpbGVQYXRoKTtcblx0fVxuXG5cdHJlYWRMaW5lLmNsb3NlKCk7XG59KSgpO1xuIl0sIm1hcHBpbmdzIjoib1RBQUEsbUNBQ0EsK0JBQ0EsNENBQ0Es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