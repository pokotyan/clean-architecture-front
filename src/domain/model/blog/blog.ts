import { Type } from "class-transformer";
import { IsInt, IsString, IsDateString, ValidateNested } from "class-validator";
import dayjs from "dayjs";
import { Author } from "./user";
import Comment from "./comment";

export class Blog {
  @IsInt()
  id: number;

  @Type(() => Author)
  @ValidateNested()
  user: Author;

  @IsString()
  title: string;

  @IsString()
  body: string;

  @Type(() => Comment)
  @ValidateNested()
  comments: Comment[];

  @IsDateString()
  createdAt: Date;

  get postDate(): string {
    return dayjs(this.createdAt).format("MMMM D, YYYY");
  }
}
