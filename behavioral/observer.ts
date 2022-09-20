class Observer {
  name: string;

  constructor(name) {
    this.name = name;
  }

  action(changes: string) {
    console.log(`Hi ${this.name} was updated ${changes}`);
  }
}

class Subject {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  trigger(changes: string) {
    this.observers.forEach((observer) => {
      observer.action(changes);
    });
  }
}

const subject$ = new Subject();

const obs1 = new Observer('Azazin');
const obs2 = new Observer('Kreet');

subject$.subscribe(obs1);
subject$.subscribe(obs2);

subject$.trigger('data');
