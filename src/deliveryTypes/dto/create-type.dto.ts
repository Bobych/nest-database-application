import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeDto {
  @ApiProperty({ description: 'Name of type', nullable: false })
  readonly value: string;

  @ApiProperty({ description: 'Cost of type', nullable: false })
  readonly base_cost: number;

  @ApiProperty({ description: 'Comment of type', nullable: false })
  readonly comment: string;
}
