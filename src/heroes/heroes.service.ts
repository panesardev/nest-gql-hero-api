import { Injectable } from '@nestjs/common';
import { CreateHeroInput } from './models/create-hero.input';
import { UpdateHeroInput } from './models/update-hero.input';
import { v4 as uuid } from 'uuid';
import { Hero } from './models/hero.object';
import { InjectModel } from '@nestjs/mongoose';
import { HeroDoc, HeroModel } from './models/hero.schema';
import { Model } from 'mongoose';

@Injectable()
export class HeroesService {

  constructor(
    @InjectModel(HeroModel.name) private readonly HeroDoc: Model<HeroDoc>
  ) { }

  async create(input: CreateHeroInput): Promise<Hero> {
    const hero: Hero = { heroId: uuid(), ...input };
    const createHero = new this.HeroDoc(hero);
    return await createHero.save();
  }

  async update(input: UpdateHeroInput): Promise<Hero> {
    return await this.HeroDoc.updateOne(
      { heroId: input.heroId }, 
      { name: input.name, health: input.health }
    ).exec();
  }

  async findOne(heroId: string): Promise<Hero> {
    return await this.HeroDoc.findOne({ heroId }).exec();
  }

  async findAll(): Promise<Hero[]> {
    return await this.HeroDoc.find().exec();
  }

  async remove(heroId: string): Promise<Hero> {
    return await this.HeroDoc.deleteOne({ heroId }).exec();
  }
}
