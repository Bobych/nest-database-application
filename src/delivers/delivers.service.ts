import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { Delivers } from './entities/deliver.entity';
import { DELIVERY_REPOSITORY } from 'src/.const';

@Injectable()
export class DeliversService {
  constructor(
    @Inject(DELIVERY_REPOSITORY)
    private readonly deliveryRepository: typeof Delivers,
  ) {}

  async create(dto: CreateDeliveryDto) {
    return await this.deliveryRepository.create(dto);
  }

  async findAll() {
    return await this.deliveryRepository.findAll();
  }

  async findOne(id: number) {
    const data = await this.deliveryRepository.findByPk(id);
    if (data) {
      return data;
    } else {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: number, dto: UpdateDeliveryDto) {
    const affected = await this.deliveryRepository.update(dto, {
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
    const affected = await this.deliveryRepository.destroy({
      where: { id: id },
    });
    if (!affected) {
      throw new HttpException(
        `Status with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
