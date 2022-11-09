import { Injectable } from '@nestjs/common';

import { CorePersistencePort } from './ports/core-persistence.port';

import { ProjectService } from './project/project.service';
import { UserService } from './user/user.service';

@Injectable()
export class CoreService {
  constructor(
    private persistencePort: CorePersistencePort,
    private projectService: ProjectService,
    private userService: UserService,
  ) {
    console.log('CoreService: created');
    this.persistencePort.test();
    this.projectService.test();
    this.userService.test();
  }
}
