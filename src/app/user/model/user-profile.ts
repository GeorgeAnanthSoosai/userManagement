export class UserProfile {
  constructor(public userId: number,
              public name: string,
              public friends: string[],
              public age: number,
              public weight: number) {}
}
