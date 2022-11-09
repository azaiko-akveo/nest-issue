import { Injectable } from '@nestjs/common';

import { CoreApiPort } from '../ports/core-api.port';

@Injectable()
export class CoreApiAdapter implements CoreApiPort {
  test(): void {
    console.log('CoreApiAdapter: test');
  }
}
