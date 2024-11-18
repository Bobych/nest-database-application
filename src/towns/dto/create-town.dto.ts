import { ApiProperty } from '@nestjs/swagger';

export class CreateTownDto {
  @ApiProperty({ description: 'Name of town', nullable: false })
  readonly value: string;

  @ApiProperty({ description: 'Country of town', nullable: false })
  readonly country: string;
}
