import { user } from '../user';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class role {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id: number = 0;

  @Column('varchar', { nullable: false, length: 500, name: 'role' })
  role: string = '';

  @ManyToMany(() => user, (user) => user.roles)
  @JoinTable({
    name: 'user_roles',
    joinColumns: [{ name: 'role_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'user_id', referencedColumnName: 'id' }],
  })
  users!: user[];
}
