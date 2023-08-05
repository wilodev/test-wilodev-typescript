import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Author } from 'src/authors/entities/author.entity';
import { CreateRelationAuthorDto } from './create-relation-author.dto';
import { CreateAuthorDto } from 'src/authors/dtos/create-author.dto';
export class CreateBookDto {
  @ApiProperty({
    description: 'The title of the book',
  })
  @IsNotEmpty()
  title: string;
  @ApiProperty({
    description: 'The number of chapters of the book',
  })
  @IsNotEmpty()
  chapters: number;
  @ApiProperty({
    description: 'The number of pages of the book',
  })
  @IsNotEmpty()
  pages: number;
  @ApiProperty({
    description: 'The authors of the book',
  })
  @IsNotEmpty()
  authors: CreateAuthorDto[];
}
