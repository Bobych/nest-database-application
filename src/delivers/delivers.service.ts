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
    const data = await this.deliveryRepository.findAll();
    if (!data.length) {
      throw new HttpException(`There is no deliveries.`, HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async findOne(id: number) {
    const data = await this.deliveryRepository.findByPk(id);
    if (!data) {
      throw new HttpException(
        `Delivery with #id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return data;
  }

  async update(id: number, dto: UpdateDeliveryDto) {
    const affected = await this.deliveryRepository.update(dto, {
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
