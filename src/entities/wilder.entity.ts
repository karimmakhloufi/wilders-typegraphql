import { Field, ObjectType } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";
import { Skill } from "./skill.entity";

@ObjectType()
export class Wilder {
  @Field()
  @prop()
  name: string;

  @Field()
  @prop()
  city: string;

  @Field(() => [Skill])
  @prop()
  skills: Skill[];
}

export const WilderModel = getModelForClass(Wilder);
