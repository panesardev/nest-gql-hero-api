import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesResolver } from './heroes.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroModel, HeroSchema } from './models/hero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: HeroModel.name, schema: HeroSchema }]),
  ],
  providers: [HeroesResolver, HeroesService]
})
export class HeroesModule {}
