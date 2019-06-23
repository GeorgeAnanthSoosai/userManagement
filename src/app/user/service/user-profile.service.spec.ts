import { TestBed } from '@angular/core/testing';

import { UserProfileService } from './user-profile.service';
import { UserProfile } from '../model/user-profile';

describe('UserProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserProfileService = TestBed.get(UserProfileService);
    expect(service).toBeTruthy();
  });

  it('should create increamental unique user Id', () => {
    const service: UserProfileService = TestBed.get(UserProfileService);
    const userId: number = service.generateNewId();
    expect(userId).toBe(6);
    service.addNewUser(new UserProfile(1, 'George', ['Pavan', 'Mary', 'Sam', 'Rinkesh'], 30, 140));
    const newUserId: number = service.generateNewId();
    expect(newUserId).toBe(7);
  })
});
