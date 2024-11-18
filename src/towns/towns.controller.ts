import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TownService } from './towns.service';
import { CreateTownDto } from './dto/create-town.dto';
import { UpdateTownDto } from './dto/update-town.dto';

@Controller('towns')
export class TownController {
  constructor(private readonly townService: TownService) {}

  @Post()
  create(@Body() dto: CreateTownDto) {
    return this.townService.create(dto);
  }

  @Get()
  findAll() {
    return this.townService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.townService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateTownDto) {
    return this.townService.update(+id, updateStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.townService.remove(+id);
  }
}
