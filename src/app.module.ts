import { Module } from '@nestjs/common';
import { BackofficeModule } from './backoffice/backoffice.module';

@Module({
  imports: [BackofficeModule],

  providers: [],
})
export class AppModule {}
