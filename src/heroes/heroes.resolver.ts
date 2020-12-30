import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateHeroInput } from './models/create-hero.input';
import { HeroesService } from './heroes.service';
import { Hero } from './models/hero.object';
import { UpdateHeroInput } from './models/update-hero.input';

@Resolver(() => Hero)
export class HeroesResolver {
  constructor(private readonly heroesService: HeroesService) {}

  @Mutation(() => Hero)
  createHero(@Args('createHeroInput') input: CreateHeroInput) {
    return this.heroesService.create(input);
  }

  @Query(() => [Hero], { name: 'heroes' })
  findAll() {
    return this.heroesService.findAll();
  }

  @Query(() => Hero, { name: 'hero' })
  findOne(@Args('heroId', { type: () => String }) heroId: string) {
    return this.heroesService.findOne(heroId);
  }

  @Mutation(() => Hero)
  updateHero(@Args('updateHeroInput') input: UpdateHeroInput) {
    return this.heroesService.update(input);
  }

  @Mutation(() => Hero)
  removeHero(@Args('heroId', { type: () => String }) heroId: string) {
    return this.heroesService.remove(heroId);
  }
}
