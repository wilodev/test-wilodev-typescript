import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateRelationAuthorDto {
  @ApiProperty({
    description: 'The authors of the book',
  })
  @IsNotEmpty()
  id: number;
}
