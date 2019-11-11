import {CredentialsTeacher} from '../repositories/teacher.repository';
import * as isemail from 'isemail';
import {HttpErrors} from '@loopback/rest';

export function validateCredentials(credentials: CredentialsTeacher) {
  // Validate Email
  /*if (!isemail.validate(credentials.correo)) {
    throw new HttpErrors.UnprocessableEntity('invalid email');
  }*/

  // Validate Email
  /*if (!credentials.rfc.length == 12 ) {
    throw new HttpErrors.UnprocessableEntity('invalid rfc');
  }*/

  // Validate Password Length
  if (credentials.password.length < 8) {
    throw new HttpErrors.UnprocessableEntity(
      'password must be minimum 8 characters',
    );
  }
}
