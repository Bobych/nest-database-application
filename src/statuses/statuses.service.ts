import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Statuses } from './entities/status.entity';
import { STATUS_REPOSITORY } from 'src/.const';

@Injectable()
export class StatusesService {
  constructor(
    @Inject(STATUS_REPOSITORY)
    private readonly statusRepository: typeof Statuses,
  ) {}

  async create(dto: CreateStatusDto) {
    return await this.statusRepository.create(dto);
  }

  async findAll() {
    const data = await this.statusRepository.findAll();
    if (!data.length) {
      throw new HttpException(`There is no statuses.`, HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async findOne(id: number) {
    const data = await this.statusRepository.findByPk(id);
    if (!data) {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return data;
  }

  async update(id: number, dto: UpdateStatusDto) {
    const affected = await this.statusRepository.update(dto, {
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
    const affected = await this.statusRepository.destroy({ where: { id: id } });
    if (!affected) {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
