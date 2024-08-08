import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {

    @ApiProperty()
    title: string;
  
    @ApiProperty({ required: false })
    content?: string;
  
    @ApiProperty({ required: false })
    image: string;
  
    @ApiProperty({ required: false, default: false })
    published?: boolean = false;
}
