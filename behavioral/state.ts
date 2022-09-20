enum Status {
  WaitingPayment = 'waiting payment',
  Shipping = 'shipping',
  Delivered = 'delivered',
}

class OrderStatus {
  currentStatus: Status;
  nextStatus: any;

  constructor(currentStatus, nextStatus) {
    this.currentStatus = currentStatus;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super(Status.WaitingPayment, Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super(Status.Shipping, Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super(Status.Delivered, Delivered);
  }
}

class Order {
  state: OrderStatus;

  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }
}
