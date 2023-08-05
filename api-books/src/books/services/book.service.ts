import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from '../dtos/create-book.dto';
import { UpdateBookDto } from '../dtos/update-book.dto';
@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    this.bookRepository.create(createBookDto);
    return await this.bookRepository.save(createBookDto);
  }

  async findAll() {
    return await this.bookRepository.find({
      relations: ['authors'],
    });
  }

  async findOne(id: number) {
    const response = await this.bookRepository.findOne({
      where: {
        id,
      },
      relations: ['authors'],
    });
    if (!response) {
      throw new Error('Libro no encontrado');
    }
    return response;
  }

  async getBookWithAveragePagesPerChapter(id: number) {
    const book = await this.bookRepository.findOne({
      where: {
        id,
      },
    });

    if (!book) {
      throw new Error('Libro no encontrado');
    }

    const averagePagesPerChapter = book.pages / book.chapters;

    return {
      ...book,
      averagePagesPerChapter: averagePagesPerChapter.toFixed(2),
    };
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    await this.bookRepository.update(id, updateBookDto);
    return await this.bookRepository.findOne({
      where: {
        id,
      },
      relations: ['books'],
    });
  }

  async remove(id: number) {
    const result = await this.bookRepository.delete(id);
    return result.affected > 0;
  }
}
