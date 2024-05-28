import { menu } from '#entity/menu';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class MenuService {
  constructor(
    @InjectRepository(menu)
    private table: Repository<menu>,
  ) {}

  public async list(): Promise<menu[]> {
    return this.table.find();
  }

  public async get(id: number): Promise<menu | null> {
    return this.table.findOneBy({ id });
  }

  public async upsert(menu: menu): Promise<menu | null> {
    const entity = await this.get(menu.id);
    if (entity == null) {
      return null;
    }
    return this.table.save(menu);
  }
}
