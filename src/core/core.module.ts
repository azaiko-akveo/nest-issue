import { DynamicModule, Module, Type } from '@nestjs/common';

import { CoreService } from './core.service';

import { CoreApiAdapter } from './adapters/core-api.adapter';
import { CoreApiPort } from './ports/core-api.port';

import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';

@Module({})
export class CoreModule {
  static register(modules: (Type<any> | DynamicModule)[] = []): DynamicModule {
    return {
      module: CoreModule,
      imports: [...modules, ProjectModule.forRoot(), UserModule.forRoot()],
      providers: [
        CoreService,
        { provide: CoreApiPort, useClass: CoreApiAdapter },
      ],
      exports: [CoreApiPort],
    };
  }
}
