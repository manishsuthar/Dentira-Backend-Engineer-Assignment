import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controller/product.controller';
import { AmazonService } from './services/amazon.service';
import { CromaService } from './services/croma.service';
import { FlipKartService } from './services/flipkart.service';
import { RDigitalService } from './services/rdigital.service';

@Module({
  imports: [HttpModule, CacheModule.register({ isGlobal: true })],
  controllers: [AppController, ProductController],
  providers: [
    AppService,
    AmazonService,
    FlipKartService,
    CromaService,
    RDigitalService,
  ],
})
export class AppModule {}
