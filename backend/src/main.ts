import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { AllExceptionsFilter } from './common/exception-filter';
import { createCustomLogger } from './common/logger';
import { createCustomValidationPipe } from './common/validation-pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: createCustomLogger(),
  });
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(createCustomValidationPipe());
  await app.listen(3000);
}
bootstrap();
