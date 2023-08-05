import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateBookDto } from 'src/books/dtos/create-book.dto';
import { UpdateBookDto } from 'src/books/dtos/update-book.dto';
import { BookService } from 'src/books/services/book.service';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({
    summary: ` Create a book para esto en la sección autores poner algo parecido a esto: @ApiProperty({ type: [CreateBookDto] }) {
      "title": "Libro",
      "chapters":45,
      "pages": 23,
      "authors": [
        {
          "id":1
        },
      ]
    }`,
  })
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Get('/avg/:id')
  getBookAvg(@Param('id') id: number) {
    return this.bookService.getBookWithAveragePagesPerChapter(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
