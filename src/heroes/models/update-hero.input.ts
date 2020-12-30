import { CreateHeroInput } from './create-hero.input';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateHeroInput extends CreateHeroInput {
  @Field(() => String)
  heroId: string;
}
