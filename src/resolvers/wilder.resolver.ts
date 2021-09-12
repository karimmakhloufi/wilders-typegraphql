import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Wilder } from "../entities/wilder.entity";
import { WilderInput } from "./inputTypes/wilders.input";

const wilders = [
  {
    name: "Alain",
    city: "Paris",
    skills: [
      {
        name: "NodeJS",
        votes: 3,
      },
    ],
  },
  {
    name: "Bernadette",
    city: "Paris",
    skills: [
      {
        name: "NodeJS",
        votes: 0,
      },
    ],
  },
  {
    name: "Charles",
    city: "Paris",
    skills: [
      {
        name: "React",
        votes: 2,
      },
    ],
  },
  {
    name: "Delphine",
    city: "Paris",
    skills: [
      {
        name: "React",
        votes: 3,
      },
    ],
  },
  {
    name: "Edouard",
    city: "Bordeaux",
    skills: [
      {
        name: "VueJS",
        votes: 0,
      },
    ],
  },
];

@Resolver()
export class WilderResolver {
  @Query(() => [Wilder])
  wilders() {
    return wilders;
  }

  @Mutation(() => Wilder)
  addWilder(@Arg("wilder") { name, city }: WilderInput) {
    console.log("name", name);
    console.log("city", city);
    return {
      name: "Edouard",
      city: "Bordeaux",
      skills: [
        {
          name: "VueJS",
          votes: 0,
        },
      ],
    };
  }
}
