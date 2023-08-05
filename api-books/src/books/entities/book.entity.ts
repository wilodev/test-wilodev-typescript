import { Author } from 'src/authors/entities/author.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Timestamp,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity({
  name: 'books',
})
export class Book {
  @PrimaryGeneratedColumn({
    name: 'id',
    comment: 'Identificador único de la tabla Libros',
  })
  id: number;

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable({
    name: 'books_authors',
  })
  authors: Author[];

  @Column({
    length: 500,
    nullable: false,
    comment: 'Título del libro',
    unique: true,
  })
  title: string;

  @Column({ type: 'int', comment: ' Representa la cantidad de capítulos' })
  chapters: number;

  @Column({ type: 'int', comment: 'Representa la cantidad de páginas' })
  pages: number;

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
