import { user } from "../user";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("roles")

export class role{
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
    id:number=0;

    @Column('varchar',{nullable:false,length:500,name:'role'})
    role:string='';

    @ManyToMany(() => user, (user) => user.roles)
    users!: user[];
}