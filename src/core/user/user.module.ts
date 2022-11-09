import { DynamicModule, forwardRef, Module } from '@nestjs/common';

import { ProjectModule } from '../project/project.module';

import { UserService } from './user.service';

@Module({
  imports: [forwardRef(() => ProjectModule.forRoot())],
})
export class UserModule {
  static forRoot(): DynamicModule {
    return {
      module: UserModule,
      imports: [forwardRef(() => ProjectModule.forRoot())],
      providers: [UserService],
      exports: [UserService],
    };
  }
}
