import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDto {
  @ApiProperty({ description: 'Name of status', nullable: false })
  readonly value: string;

  @ApiProperty({ description: 'Comment of status', nullable: true })
  readonly comment?: string;
}
