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
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Types } from 'src/deliveryTypes/entities/type.entity';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  @ApiOperation({ summary: 'Create type' })
  @ApiParam({ name: 'value', description: 'Name of type', required: true })
  @ApiParam({
    name: 'base_cost',
    description: 'Cost of type',
  })
  @ApiParam({
    name: 'comment',
    description: 'Comment of type',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Types,
  })
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all types' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Types,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Types,
  })
  findAll() {
    return this.typesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get type' })
  @ApiParam({ name: 'id', description: 'Type id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Types,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Types,
  })
  findOne(@Param('id') id: string) {
    return this.typesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update type' })
  @ApiParam({ name: 'id', description: 'Type id' })
  @ApiParam({ name: 'value', description: 'Name of type', required: false })
  @ApiParam({
    name: 'country',
    description: 'Comment of town',
    required: false,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Types,
  })
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(+id, updateTypeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete type' })
  @ApiParam({ name: 'id', description: 'Type id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Types,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Types,
  })
  remove(@Param('id') id: string) {
    return this.typesService.remove(+id);
  }
}
