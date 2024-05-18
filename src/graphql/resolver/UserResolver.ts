import {
  Args,
  Int,
  Query,
  ResolveField,
  Resolver,
  Parent,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/_mocks_/mockUser';
import { UserSetting } from '../models/UserSetting';
import { mockUserSetting } from 'src/_mocks_/mockUserSettings';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }
  @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  getUserSetting(@Parent() user: User) {
    console.log(user);
    return mockUserSetting.find((setting) => setting.userId === user.id);
  }
}
