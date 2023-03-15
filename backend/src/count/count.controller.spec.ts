import { Test, TestingModule } from '@nestjs/testing';
import { CountController } from './count.controller';

describe('CountController', () => {
  let controller: CountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountController],
    }).compile();

    controller = module.get<CountController>(CountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
