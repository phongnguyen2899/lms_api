import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SlideDto } from '../dto';
import { slide } from '#entity/slide';

export class SlideService {
  constructor(
    @InjectRepository(slide)
    private table: Repository<slide>,
  ) {}

  public async list(): Promise<slide[]> {
    return this.table.find();
  }

  public async get(id: number): Promise<slide | null> {
    return this.table.findOneBy({ id });
  }

  public async upsert(menu: SlideDto): Promise<slide | null> {
    return this.table.save(menu);
  }
}
