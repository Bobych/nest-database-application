import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
  HasOne,
} from 'sequelize-typescript';
import { Delivers } from 'src/delivers/entities/deliver.entity';

@Table({ tableName: 'types' })
export class Types extends Model<Types> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  base_cost: number;

  @Column({ type: DataType.STRING, allowNull: true })
  comment: string;

  @HasOne(() => Delivers)
  delivery: Delivers;
}
