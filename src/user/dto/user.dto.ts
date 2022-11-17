import { IsNotEmpty, IsEmail} from 'class-validator';
export class UserDto {
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  dob: string;
}