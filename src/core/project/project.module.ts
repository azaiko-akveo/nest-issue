import { DynamicModule, forwardRef, Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';

import { ProjectService } from './project.service';

@Module({
  // imports: [forwardRef(() => UserModule.forRoot())],
})
export class ProjectModule {
  static forRoot(): DynamicModule {
    return {
      module: ProjectModule,
      imports: [forwardRef(() => UserModule.forRoot())],
      providers: [ProjectService],
      exports: [ProjectService],
    };
  }
}
