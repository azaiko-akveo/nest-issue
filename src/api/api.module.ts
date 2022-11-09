import { DynamicModule, Module, Type } from '@nestjs/common';

import { ApiService } from './api.service';

@Module({
  providers: [ApiService],
})
export class ApiModule {
  static register(modules: (Type<any> | DynamicModule)[] = []): DynamicModule {
    return {
      module: ApiModule,
      imports: modules,
    };
  }
}
