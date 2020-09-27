import { Type } from "class-transformer";
import { IsInt, IsString, IsDateString, ValidateNested } from "class-validator";
import dayjs from "dayjs";
import { Commenter } from "./user";

export default class Comment {
  @IsInt()
  id: number;

  @IsString()
  body: string;

  @Type(() => Commenter)
  @ValidateNested()
  user: Commenter;

  @IsDateString()
  createdAt: Date;

  get postDate(): string {
    return dayjs(this.createdAt).format("MMMM D, YYYY");
  }
}
