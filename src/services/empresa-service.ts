import {HttpErrors} from '@loopback/rest';
import {CredentialsTeacher, TeacherRepository} from '../repositories/teacher.repository';
import {Teacher} from '../models/teacher.model';
import {UserService, UserProfile} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {PasswordHasher} from './hash.password.bcryptjs';
import {PasswordHasherBindings} from "../key";
import {inject} from '@loopback/context';

export class MyUserService implements UserService<Teacher, CredentialsTeacher> {
  constructor(
    @repository(TeacherRepository) public userRepository: TeacherRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) {}

  async verifyCredentials(credentials: CredentialsTeacher): Promise<Teacher> {
    const foundUser = await this.userRepository.findOne({
      where: {_id: credentials._id},
    });

    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `User with rfc ${credentials._id} not found.`,
      );
    }
    
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('The credentials are not correct.');
    }

    return foundUser;
  }

  convertToUserProfile(user: Teacher): UserProfile {
    // since first name and lastName are optional, no error is thrown if not provided
    let userName = '';
    if (user.name) userName = `${user.name}`;
    if (user.lastName)
      userName = user.lastName
        ? `${userName} ${user.lastName}`
        : `${user.lastName}`;
    return {id: user._id, name: userName};
  }
}
