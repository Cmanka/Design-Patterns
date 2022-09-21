abstract class Builder {
  build() {
    this.firstStep();
    this.secondStep();
    this.thirdStep();
  }
  abstract firstStep();
  abstract secondStep();
  abstract thirdStep();
}

class MobileBuilder extends Builder {
  firstStep() {
    console.log('mobile first step');
  }
  secondStep() {
    console.log('mobile second step');
  }
  thirdStep() {
    console.log('mobile third step');
  }
}

class PcBuilder extends Builder {
  firstStep() {
    console.log('pc first step');
  }
  secondStep() {
    console.log('pc second step');
  }
  thirdStep() {
    console.log('pc third step');
  }
}

const mobile = new MobileBuilder();
const pc = new PcBuilder();

pc.build();
mobile.build();
