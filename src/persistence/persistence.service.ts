import { Injectable } from '@nestjs/common';

@Injectable()
export class PersistenceService {
  constructor() {
    console.log('PersistenceService: created');
  }
}
