import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Types } from './entities/type.entity';
import { TYPE_REPOSITORY } from 'src/.const';

@Injectable()
export class TypesService {
  constructor(
    @Inject(TYPE_REPOSITORY)
    private readonly typesRepository: typeof Types,
  ) {}

  async create(dto: CreateTypeDto) {
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

  async update(id: number, dto: UpdateTypeDto) {
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
