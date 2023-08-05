import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from '../dtos/create-author.dto';
import { UpdateAuthorDto } from '../dtos/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}
  async create(createAuthorDto: CreateAuthorDto) {
    this.authorRepository.create(createAuthorDto);
    return await this.authorRepository.save(createAuthorDto);
  }

  async findAll() {
    return await this.authorRepository.find({
      relations: ['books'],
    });
  }

  async findOne(id: number) {
    return await this.authorRepository.findOne({
      where: {
        id,
      },
      relations: ['books'],
    });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    await this.authorRepository.update(id, updateAuthorDto);
    return await this.authorRepository.findOne({
      where: {
        id,
      },
      relations: ['books'],
    });
  }

  async remove(id: number) {
    const result = await this.authorRepository.delete(id);
    return result.affected > 0;
  }
}
