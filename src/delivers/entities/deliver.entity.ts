import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Types } from 'src/deliveryTypes/entities/type.entity';
import { Statuses } from 'src/statuses/entities/status.entity';
import { Towns } from 'src/towns/entites/town.entity';

@Table({ tableName: 'delivers' })
export class Delivers extends Model<Delivers> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  contacts: string;

  @ForeignKey(() => Types)
  @Column({ type: DataType.INTEGER, allowNull: false })
  type_id: number;

  @ForeignKey(() => Statuses)
  @Column({ type: DataType.INTEGER, allowNull: false })
  status_id: number;

  @ForeignKey(() => Towns)
  @Column({ type: DataType.INTEGER, allowNull: false })
  town_id: number;

  @BelongsTo(() => Types)
  type: Types;

  @BelongsTo(() => Statuses)
  status: Statuses;

  @BelongsTo(() => Towns)
  town: Towns;
}
