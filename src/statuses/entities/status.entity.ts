import { Column, DataType, Model, Table, HasOne } from 'sequelize-typescript';
import { Delivers } from 'src/delivers/entities/deliver.entity';

@Table({ tableName: 'statuses' })
export class Statuses extends Model<Statuses> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @Column({ type: DataType.STRING, allowNull: true })
  comment: string;

  @HasOne(() => Delivers)
  delivery: Delivers;
}
