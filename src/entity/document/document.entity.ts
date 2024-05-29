import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('documents')
export class document {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id: number = 0;

  @Column('varchar', { length: 500, name: 'name' })
  name: string = '';

  @Column('varchar', { length: 500, name: 'file_name' })
  file_name: string = '';

  @Column({ type: 'int', name: 'file' })
  file_type: number;

  constructor(id: number, name: string, file_name: string, file_type: number) {
    this.id = id;
    this.name = name;
    this.file_name = file_name;
    this.file_type = file_type;
  }
}
