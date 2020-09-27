import { IsInt, IsString } from "class-validator";

class User {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  get initial(): string {
    return this.name[0];
  }
}

export class Author extends User {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}

export class Commenter extends User {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
