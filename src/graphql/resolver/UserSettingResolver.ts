import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSetting } from '../utils/CreateUserSettingsInput';
import { mockUserSetting } from 'src/_mocks_/mockUserSettings';

@Resolver()
export class UserSettingResolver {
  @Mutation(() => UserSetting)
  createUserSetting(
    @Args('createUserSettingsData') createUserSettingsData: CreateUserSetting,
  ) {
    console.log(createUserSettingsData);

    mockUserSetting.push(createUserSettingsData);
    return createUserSettingsData;
  }
}
