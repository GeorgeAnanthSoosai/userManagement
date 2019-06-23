import { UserProfile } from './user-profile';

describe('UserProfile', () => {
  it('should create an instance', () => {
    expect(new UserProfile(1, 'George', ['Pavan', 'Mary', 'Sam', 'Rinkesh'], 30, 140)).toBeTruthy();
  });
});
