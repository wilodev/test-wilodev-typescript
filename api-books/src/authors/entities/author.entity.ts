import { Book } from 'src/books/entities/book.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Timestamp,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({
  name: 'authors',
})
export class Author {
  @PrimaryGeneratedColumn({
    name: 'id',
    comment: 'Identificador único de la tabla Author',
  })
  id: number;

  @ManyToMany(() => Book, (book) => book.authors)
  books: Book[];

  @Column({
    length: 500,
    nullable: false,
    comment: 'Nombre del Author',
    unique: true,
  })
  name: string;

  @CreateDateColumn({
    name: 'created_at',

    nullable: true,
    comment: 'Fecha de creación del Author en la base de datos',
  })
  createdAt: Timestamp;

  @UpdateDateColumn({
    name: 'updated_at',

    nullable: true,
    comment: 'Fecha de actualización del Author en la base de datos',
  })
  updatedAt: Timestamp;

  @DeleteDateColumn({
    name: 'deleted_at',

    nullable: true,
    comment: 'Fecha de eliminación del Author en la base de datos',
  })
  deletedAt: Timestamp;
}
