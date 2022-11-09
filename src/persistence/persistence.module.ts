import { DynamicModule, Module } from '@nestjs/common';

import { PersistenceService } from './persistence.service';
import { PersistenceCoreAdapter } from './persistence-core.adapter';

import { CorePersistencePort } from 'src/core/ports/core-persistence.port';

@Module({
  providers: [
    PersistenceService,
    { provide: CorePersistencePort, useClass: PersistenceCoreAdapter },
  ],
  exports: [CorePersistencePort],
})
export class PersistenceModule {
  static register(): DynamicModule {
    return {
      module: PersistenceModule,
    };
  }
}
