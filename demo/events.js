const EventEmitter = require("events");
const emitter = new EventEmitter();
// emitter.on("anything", (data) =>{
//     console.log("On: anything", data);
// });

// setTimeout(() => {
//     emitter.emit("anything", {a:1});
// }, 5000);

class Dispatcher extends EventEmitter{
    subscribe(eventName, cb){
        console.log("[Subscribe...]");
        this.on(eventName, cb)
    }
    dispatch(eventName, data){
        console.log("[Dispatch...]");
        this.emit(eventName, data);
    }
}
const dis = new Dispatcher();

dis.subscribe("aa", data =>{
    console.log("On:aa", data);
});
dis.dispatch("aa", {aa:22})
