enum SneakersType {
  Walk = 'Walk',
  Run = 'Run',
}

class WalkingModel {
  description() {
    return 'walking model';
  }
}

class RunningModel {
  description() {
    return 'running model';
  }
}

class SneakersWalkingFactory {
  generate() {
    return new WalkingModel();
  }
}

class SneakersRunningFactory {
  generate() {
    return new RunningModel();
  }
}

class SneakersProducer {
  create(type: SneakersType) {
    if (type === SneakersType.Run) {
      return new SneakersRunningFactory();
    }
    if (type === SneakersType.Walk) {
      return new SneakersWalkingFactory();
    }

    throw new Error('unknown sneakers');
  }
}

const producer = new SneakersProducer().create(SneakersType.Run);

const sneakers = producer.generate();
