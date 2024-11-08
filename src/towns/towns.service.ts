import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateTownDto } from './dto/create-town.dto';
import { UpdateTownDto } from './dto/update-town.dto';
import { TOWN_REPOSITORY } from 'src/.const';
import { Types } from 'src/deliveryTypes/entities/type.entity';

@Injectable()
export class TownService {
  constructor(
    @Inject(TOWN_REPOSITORY)
    private readonly typesRepository: typeof Types,
  ) {}

  async create(dto: CreateTownDto) {
    return await this.typesRepository.create(dto);
  }

  async findAll() {
    return await this.typesRepository.findAll();
  }

  async findOne(id: number) {
    const data = await this.typesRepository.findByPk(id);
    if (data) {
      return data;
    } else {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: number, dto: UpdateTownDto) {
    const affected = await this.typesRepository.update(dto, {
      where: { id: id },
    });
    if (!affected) {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: number) {
    const affected = await this.typesRepository.destroy({ where: { id: id } });
    if (!affected) {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
