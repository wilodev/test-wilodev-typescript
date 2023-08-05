import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsController } from './controllers/authors.controller';
import { Author } from './entities/author.entity';
import { AuthorService } from './services/author.service';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorsController],
  providers: [AuthorService],
})
export class AuthorsModule {}
