import { forwardRef, Inject, Injectable } from '@nestjs/common';

import { ProjectService } from '../project/project.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => ProjectService))
    private projectService: ProjectService,
  ) {
    console.log('UserService: created');
    this.projectService.test();
  }

  test() {
    console.log('UserService: test');
  }
}
