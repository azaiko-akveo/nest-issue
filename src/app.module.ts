import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { CoreModule } from './core/core.module';
import { PersistenceModule } from './persistence/persistence.module';

const persistenceModule = PersistenceModule.register();
const coreModule = CoreModule.register([persistenceModule]);
const apiModule = ApiModule.register([coreModule]);

@Module({
  imports: [persistenceModule, coreModule, apiModule],
})
export class AppModule {}
