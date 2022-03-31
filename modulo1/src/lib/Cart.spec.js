import Cart from '../lib/Cart';

describe('Cart', () => {
  let cart = new Cart();
  let product = {
    title: 'Adidas running shoes - men',
    price: 35388, // 353.88
  };

  let product2 = {
    title: 'Adidas running shoes - women',
    price: 41872,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly created instance', () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantity and price receive the total amount', () => {
      const item = {
        product,
        quantity: 2,
      };

      cart.addItem(item);

      expect(cart.getTotal()).toEqual(70776);
    });

    it('should ensure no more than one product exists at a time', () => {
      cart.addItem({
        product,
        quantity: 2,
      });

      cart.addItem({
        product,
        quantity: 1,
      });

      expect(cart.getTotal()).toEqual(35388);
    });

    it('should update total when a product gets indcluded and then removed', () => {
      cart.addItem({
        product,
        quantity: 2,
      });

      cart.addItem({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(41872);
    });
  });

  describe('summary()', () => {
    it('should return an object with the total and the list of items when summary() is called', () => {
      cart.addItem({
        product,
        quantity: 2,
      });

      cart.addItem({
        product: product2,
        quantity: 3,
      });

      expect(cart.summary()).toMatchSnapshot();
      expect(cart.getTotal()).toBeGreaterThan(0);
    });
  });

  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.addItem({
        product,
        quantity: 2,
      });

      cart.addItem({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it('should reset the cart when checkout() is called', () => {
      cart.addItem({
        product,
        quantity: 2,
      });

      cart.addItem({
        product: product2,
        quantity: 3,
      });

      cart.checkout();

      expect(cart.getTotal()).toEqual(0);
    });
  });
});
