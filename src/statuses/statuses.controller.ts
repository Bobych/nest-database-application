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
import { StatusesService } from './statuses.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Statuses } from './entities/status.entity';

@Controller('statuses')
export class StatusesController {
  constructor(private readonly statusesService: StatusesService) {}

  @Post()
  @ApiOperation({ summary: 'Create status' })
  @ApiParam({ name: 'value', description: 'Name of status', required: true })
  @ApiParam({
    name: 'comment',
    description: 'Comment of status',
    required: false,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Statuses,
  })
  create(@Body() dto: CreateStatusDto) {
    return this.statusesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all statuses' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Statuses,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Statuses,
  })
  findAll() {
    return this.statusesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get status' })
  @ApiParam({ name: 'id', description: 'Status id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Statuses,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Statuses,
  })
  findOne(@Param('id') id: string) {
    return this.statusesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update status' })
  @ApiParam({ name: 'id', description: 'Status id' })
  @ApiParam({ name: 'value', description: 'Name of status' })
  @ApiParam({
    name: 'country',
    description: 'Comment of town',
    required: false,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Statuses,
  })
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusesService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete status' })
  @ApiParam({ name: 'id', description: 'Status id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Statuses,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Statuses,
  })
  remove(@Param('id') id: string) {
    return this.statusesService.remove(+id);
  }
}
