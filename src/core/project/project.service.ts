import { forwardRef, Inject, Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';

@Injectable()
export class ProjectService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {
    console.log('ProjectService: created');
    this.userService.test();
  }

  test() {
    console.log('ProjectService: test');
  }
}
