interface Visitor {
  visitComponentA(element: ComponentA): void;
  visitComponentB(element: ComponentB): void;
}

class ComponentVisitor implements Visitor {
  visitComponentA(element: ComponentA): void {
    console.log(element.info());
  }
  visitComponentB(element: ComponentB): void {
    console.log(element.info());
  }
}

abstract class Component {
  abstract accept(visitor: Visitor): void;
}

class ComponentA extends Component {
  info() {
    console.log('component a');
  }

  accept(visitor: Visitor): void {
    visitor.visitComponentA(this);
  }
}

class ComponentB extends Component {
  info() {
    console.log('component b');
  }

  accept(visitor: Visitor): void {
    visitor.visitComponentB(this);
  }
}

const components = [new ComponentA(), new ComponentB()];

const visitor = new ComponentVisitor();

components.forEach((component, i) => {
  component.accept(visitor);
});
