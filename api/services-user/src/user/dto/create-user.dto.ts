import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    name: string;

    phone?: number;

    @IsNotEmpty()
    @IsEmail() 
    email: string;
    
    @IsNotEmpty() @IsStrongPassword()
    password: string;
}
