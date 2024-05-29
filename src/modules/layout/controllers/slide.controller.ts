import { Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SlideDto } from '../dto';
import { slide } from '#entity/slide';
import { SlideService } from '../providers';

@Controller('slide')
export class SlideController {
  constructor(private slideService: SlideService) {}

  @Get('list')
  public async list(): Promise<slide[]> {
    const result = await this.slideService.list();
    return result;
  }

  @Get(':id') // GET http://localhost:3000/test/crud/:id
  public async read(@Param('id', ParseIntPipe) id: number): Promise<slide> {
    const result = await this.slideService.get(id);
    if (!result) {
      throw new NotFoundException('NotFoundData');
    }
    return result;
  }
  @Post('upsert')
  public async create(@Body() body: SlideDto): Promise<{ id: number }> {
    const result = await this.slideService.upsert(body);
    if (result == null || !result.id) {
      throw new InternalServerErrorException('NotUpsertData');
    }
    return { id: result.id };
  }
}
