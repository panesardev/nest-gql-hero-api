import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Hero {
  @Field(() => String)
  heroId: string;

  @Field(() => String)
  name: string;
  
  @Field(() => Int)
  health: number;
}
