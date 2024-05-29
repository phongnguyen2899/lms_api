import { Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { menu } from '#entity/menu';
import { MenuService } from '../providers';
import { MenuDto } from '../dto';

@Controller('menu')
export class MenuController {
  constructor(private menu: MenuService) {}

  @Get('list')
  public async list(): Promise<menu[]> {
    const result = await this.menu.list();
    return result;
  }

  @Get(':id') // GET http://localhost:3000/test/crud/:id
  public async read(@Param('id', ParseIntPipe) id: number): Promise<menu> {
    const result = await this.menu.get(id);
    if (!result) {
      throw new NotFoundException('NotFoundData');
    }
    return result;
  }
  @Post('upsert')
  public async create(@Body() xx: MenuDto): Promise<{ id: number }> {
    const result = await this.menu.upsert(xx);
    if (result == null || !result.id) {
      throw new InternalServerErrorException('NotUpsertData');
    }
    return { id: result.id };
  }
}
