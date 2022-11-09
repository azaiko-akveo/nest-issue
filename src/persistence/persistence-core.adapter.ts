import { Injectable } from '@nestjs/common';
import { CorePersistencePort } from 'src/core/ports/core-persistence.port';

import { PersistenceService } from './persistence.service';

@Injectable()
export class PersistenceCoreAdapter implements CorePersistencePort {
  constructor(private persistenceService: PersistenceService) {
    console.log('PersistenceCoreAdapter: created');
  }

  test(): void {
    console.log('PersistenceCoreAdapter: test');
  }
}
