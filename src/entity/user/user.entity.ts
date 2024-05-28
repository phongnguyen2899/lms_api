import { role } from '../role';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class user {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id!: number;

  @Column('varchar', { nullable: false, length: 255, name: 'user_name' })
  username: string = '';

  @Column('varchar', { nullable: false, length: 500, name: 'password' })
  password?: string;

  @Column('varchar', { nullable: false, length: 255, name: 'email' })
  email?: string;

  @Column('varchar', { nullable: false, length: 50, name: 'phone_number' })
  phone_number?: string;

  @ManyToMany(() => role, (role) => role.users)
  @JoinTable({
    name: 'user_roles',
    joinColumns: [{ name: 'user_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'role_id', referencedColumnName: 'id' }],
  })
  roles!: role[];
}
