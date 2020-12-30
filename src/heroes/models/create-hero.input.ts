import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHeroInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  health: number;
}
