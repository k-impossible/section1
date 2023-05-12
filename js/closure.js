
/**
 * Observer 패턴
 */
const Subject = function () {
    const observers = [];
  
    return {
      subscribeObserver: function (observer) { observers.push(observer); },
      unsubscribeObserver: function (observer) {
        const index = observers.indexOf(observer);
        if (index > -1) { observers.splice(index, 1); }
      },
      notifyObserver: function (observer) {
        const index = observers.indexOf(observer);
        if (index > -1) { observers[index].notify(); }
      },
      notifyAllObservers: function () { 
              for (let i = 0; i < observers.length; i += 1){
                  observers[i].notify()
              }
          },
    };
  };
  
  const Observer = function (observerName) {
    let name = observerName;
    return {
      getName: function (name) { console.log("Observer Name:" + name); },
      notify: function () { console.log("Observer " + name + " is notified!"); },
    };
  };
  
  const subject = Subject();
  const kimcoding = Observer('kimcoding');
  const parkhacker = Observer('parkhacker');
  
  subject.subscribeObserver(kimcoding);
  subject.subscribeObserver(parkhacker);
  
  subject.unsubscribeObserver(kimcoding);
  subject.notifyAllObservers();