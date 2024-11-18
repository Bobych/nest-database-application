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
    const data = await this.typesRepository.findAll();
    if (!data.length) {
      throw new HttpException(`There is no types.`, HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async findOne(id: number) {
    const data = await this.typesRepository.findByPk(id);
    if (!data) {
      throw new HttpException(
        `Type with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return data;
  }

  async update(id: number, dto: UpdateTypeDto) {
    const affected = await this.typesRepository.update(dto, {
      where: { id: id },
    });
    if (!affected[0]) {
      throw new HttpException(
        `Type with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: number) {
    const affected = await this.typesRepository.destroy({ where: { id: id } });
    if (!affected) {
      throw new HttpException(
        `Type with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
