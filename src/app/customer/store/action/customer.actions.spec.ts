import * as fromCustomer from './customer.actions';

describe('cCustomers', () => {
  it('should return an action', () => {
    expect(fromCustomer.cCustomers().type).toBe('[Customer] C Customers');
  });
});
