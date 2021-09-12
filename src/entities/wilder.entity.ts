import { Field, ObjectType } from "type-graphql";
import { Skill } from "./skill.entity";

@ObjectType()
export class Wilder {
  @Field()
  name: string;

  @Field()
  city: string;

  @Field((type) => [Skill])
  skills: Skill[];
}
