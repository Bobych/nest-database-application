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
import { TownService } from './towns.service';
import { CreateTownDto } from './dto/create-town.dto';
import { UpdateTownDto } from './dto/update-town.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Towns } from './entites/town.entity';

@ApiTags('Towns')
@Controller('towns')
export class TownController {
  constructor(private readonly townService: TownService) {}

  @Post()
  @ApiOperation({ summary: 'Create town' })
  @ApiParam({ name: 'value', description: 'Name of town' })
  @ApiParam({ name: 'country', description: 'Country of town' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Towns })
  create(@Body() dto: CreateTownDto) {
    return this.townService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all towns' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Towns })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Towns,
  })
  findAll() {
    return this.townService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get town' })
  @ApiParam({ name: 'id', description: 'Town id' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Towns })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Towns,
  })
  findOne(@Param('id') id: string) {
    return this.townService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update town' })
  @ApiParam({ name: 'id', description: 'Town id' })
  @ApiParam({ name: 'value', description: 'Name of town' })
  @ApiParam({ name: 'country', description: 'Country of town' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Towns })
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateTownDto) {
    return this.townService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete town' })
  @ApiParam({ name: 'id', description: 'Town id' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Towns })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found',
    type: Towns,
  })
  remove(@Param('id') id: string) {
    return this.townService.remove(+id);
  }
}
