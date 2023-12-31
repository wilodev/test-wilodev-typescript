import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({
    description: 'The name of the author',
  })
  @IsNotEmpty()
  name: string;
}
