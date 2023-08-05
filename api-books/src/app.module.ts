import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesModule } from './databases/databases.module';
import { AuthorsModule } from './authors/authors.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/global';
import { environments } from './environments';
import { BooksModule } from './books/books.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: environments[process.env.NODE_ENV] || '.env',
    }),
    DatabasesModule,
    AuthorsModule,
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
