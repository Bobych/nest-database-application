import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryDto {
  @ApiProperty({ description: 'Contacts of delivery', nullable: false })
  readonly contacts: string;

  @ApiProperty({ description: 'Type of delivery', nullable: false })
  type_id: number;

  @ApiProperty({ description: 'Status of delivery', nullable: false })
  status_id: number;

  @ApiProperty({ description: 'Town of delivery', nullable: false })
  town_id: number;
}
