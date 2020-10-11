import { Test, TestingModule } from '@nestjs/testing';
import { AucMailerService } from './auc-mailer.service';

describe('AucMailerService', () => {
  let service: AucMailerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AucMailerService],
    }).compile();

    service = module.get<AucMailerService>(AucMailerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
