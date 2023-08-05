import { IsNotEmpty } from 'class-validator';
import { Author } from 'src/authors/entities/author.entity';
export class CreateBookDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  chapters: number;
  @IsNotEmpty()
  pages: number;
  @IsNotEmpty()
  authors: Author[];
}
