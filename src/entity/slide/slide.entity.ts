import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('slides')
export class slide {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id: number = 0;

  @Column('varchar', { length: 500, name: 'image_url' })
  image_url: string = '';
}
