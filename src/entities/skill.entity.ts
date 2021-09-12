import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Skill {
  @Field()
  name: string;

  @Field()
  votes: number;
}
