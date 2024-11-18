import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { DeliversService } from './delivers.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Delivers } from './entities/deliver.entity';

@Controller('delivers')
export class DeliversController {
  constructor(private readonly deliveryService: DeliversService) {}

  @Post()
  @ApiOperation({ summary: 'Create status' })
  @ApiParam({
    name: 'contacts',
    description: 'Contact of delivery',
  })
  @ApiParam({
    name: 'type',
    description: 'Type id',
  })
  @ApiParam({
    name: 'status',
    description: 'Status id',
  })
  @ApiParam({
    name: 'town',
    description: 'Town id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Delivers,
  })
  create(@Body() dto: CreateDeliveryDto) {
    return this.deliveryService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all deliveries' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Delivers,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Delivers,
  })
  findAll() {
    return this.deliveryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get delivery' })
  @ApiParam({ name: 'id', description: 'Delivery id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Delivers,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Delivers,
  })
  findOne(@Param('id') id: string) {
    return this.deliveryService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update delivery' })
  @ApiParam({ name: 'id', description: 'Delivery id' })
  @ApiParam({
    name: 'contacts',
    description: 'Contact of delivery',
  })
  @ApiParam({
    name: 'type',
    description: 'Type id',
  })
  @ApiParam({
    name: 'status',
    description: 'Status id',
  })
  @ApiParam({
    name: 'town',
    description: 'Town id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Delivers,
  })
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateDeliveryDto) {
    return this.deliveryService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete delivery' })
  @ApiParam({ name: 'id', description: 'Delivery id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Delivers,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Delivers,
  })
  remove(@Param('id') id: string) {
    return this.deliveryService.remove(+id);
  }
}
