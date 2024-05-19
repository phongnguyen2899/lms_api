import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")

export class user{
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
    id!:number;

    @Column('varchar',{nullable:false,length:255,name:'user_name'})
    username?:string;

    @Column('varchar',{nullable:false,length:500,name:'password'})
    password?:string;

    @Column('varchar',{nullable:false,length:255,name:'email'})
    email?:string;

    @Column('varchar',{nullable:false,length:50,name:'phone_number'})
    phone_number?:string;
}