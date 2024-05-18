import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserSetting {
  @Field(() => Int)
  userId: number;

  @Field({ nullable: true, defaultValue: false })
  receiveNotifications: boolean;

  @Field({ nullable: true, defaultValue: false })
  receiveEmails: boolean;
}
