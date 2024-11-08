import { HasOne, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Delivers } from 'src/delivers/entities/deliver.entity';

@Table({ tableName: 'towns' })
export class Towns extends Model<Towns> {
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
  country: string;

  @HasOne(() => Delivers)
  delivery: Delivers;
}
