import { Injectable } from '@nestjs/common';
import { CoreApiPort } from 'src/core/ports/core-api.port';

@Injectable()
export class ApiService {
  constructor(private coreApiPort: CoreApiPort) {
    console.log('ApiService: created');
    this.coreApiPort.test();
  }
}
