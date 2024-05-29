import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentDto } from '../dto';
import { document } from '#entity/document';

export class DocumentService {
  constructor(
    @InjectRepository(document)
    private table: Repository<document>,
  ) {}

  public async list(): Promise<document[]> {
    return this.table.find();
  }

  public async get(id: number): Promise<document | null> {
    return this.table.findOneBy({ id });
  }

  public async upsert(documentdto: DocumentDto): Promise<document | null> {
    const data: document = new document(documentdto.id, documentdto.name, documentdto.file_name, documentdto.file_type);
    return this.table.save(data);
  }
}
