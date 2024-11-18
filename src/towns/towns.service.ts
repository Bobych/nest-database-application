import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateTownDto } from './dto/create-town.dto';
import { UpdateTownDto } from './dto/update-town.dto';
import { TOWN_REPOSITORY } from 'src/.const';
import { Towns } from './entites/town.entity';

@Injectable()
export class TownService {
  constructor(
    @Inject(TOWN_REPOSITORY)
    private readonly townsRepository: typeof Towns,
  ) {}

  async create(dto: CreateTownDto) {
    return await this.townsRepository.create(dto);
  }

  async findAll() {
    const data = await this.townsRepository.findAll();
    if (!data.length) {
      throw new HttpException(`There is no towns.`, HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async findOne(id: number) {
    const data = await this.townsRepository.findByPk(id);
    if (!data) {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return data;
  }

  async update(id: number, dto: UpdateTownDto) {
    const affected = await this.townsRepository.update(dto, {
      where: { id: id },
    });
    if (!affected[0]) {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: number) {
    const affected = await this.townsRepository.destroy({ where: { id: id } });
    if (!affected) {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
