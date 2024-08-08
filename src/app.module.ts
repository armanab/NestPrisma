import { Module } from '@nestjs/common';
import { AppController } from './controllers';
import { AppService } from './services/app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PrismaModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
