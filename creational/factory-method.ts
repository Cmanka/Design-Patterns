enum SneakersBrand {
  Nike = 'Nike',
  Adidas = 'Adidas',
  Puma = 'Puma',
}

class Sneakers {
  brand: SneakersBrand;
  price: number;
  color: string;

  constructor(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
  }
}

class SneakersFactory {
  create(brand: SneakersBrand) {
    if (brand === SneakersBrand.Nike) {
      return new Sneakers(brand, 1000, 'green');
    }

    if (brand === SneakersBrand.Adidas) {
      return new Sneakers(brand, 2000, 'black');
    }

    if (brand === SneakersBrand.Puma) {
      return new Sneakers(brand, 3000, 'white');
    }

    throw new Error('unknown brand');
  }
}

const factoryMethod = new SneakersFactory();

const nike = factoryMethod.create(SneakersBrand.Nike);
const puma = factoryMethod.create(SneakersBrand.Puma);
const unknown = factoryMethod.create('unknown' as SneakersBrand);
