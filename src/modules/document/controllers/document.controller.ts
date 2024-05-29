import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { DocumentService } from '../providers';
import { document } from '#entity/document';
import { DocumentDto } from '../dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('document')
export class MenuController {
  constructor(private menu: DocumentService) {}

  @Get('list')
  public async list(): Promise<document[]> {
    const result = await this.menu.list();
    return result;
  }

  @Get(':id') // GET http://localhost:3000/test/crud/:id
  public async read(@Param('id', ParseIntPipe) id: number): Promise<document> {
    const result = await this.menu.get(id);
    if (!result) {
      throw new NotFoundException('NotFoundData');
    }
    return result;
  }
  @Post('upsert')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload',
        filename: (_, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExtName = extname(file.originalname); // Lấy đuôi file
          callback(null, `${file.fieldname}-${uniqueSuffix}${fileExtName}`);
        },
      }),
    }),
  )
  public async create(@UploadedFile() file: Express.Multer.File, @Body() body: DocumentDto): Promise<{ id: number }> {
    console.log(file);
    body.file_name = file.destination + '/' + file.filename;
    const result = await this.menu.upsert(body);
    if (result == null || !result.id) {
      throw new InternalServerErrorException('NotUpsertData');
    }
    return { id: result.id };
  }
}
