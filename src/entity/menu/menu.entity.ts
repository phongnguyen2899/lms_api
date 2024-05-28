import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menus')
export class menu {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id: number = 0;

  @Column('varchar', { length: 500, name: 'name' })
  name: string = '';

  @Column('varchar', { length: 500, name: 'link' })
  link: string = '';

  @Column({ type: 'int', name: 'order' })
  order: number;
}
