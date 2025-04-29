import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "Salimov",
    description: "Foydalanuvchining ismi",
  })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({
    example: "Davlat",
    description: "Foydalanuvchining familiyasi",
  })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({
    example: "123 Main St",
    description: "Foydalanuvchining manzili",
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: "Tashkent",
    description: "Foydalanuvchining shahri",
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    example: "100000",
    description: "Foydalanuvchining pochta indeksi",
  })
  @IsString()
  @IsNotEmpty()
  postcode: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Foydalanuvchining telefoni",
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: "user@example.com",
    description: "Foydalanuvchining emaili",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "qwerty123",
    description: "Foydalanuvchining paroli (xashlangan)",
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: "I am a software developer with experience in web development.",
    description: "Foydalanuvchining haqida matni",
  })
  @IsString()
  @IsNotEmpty()
  about_text: string;

  @ApiProperty({
    example: 1,
    description: "Foydalanuvchining roli (masalan, Admin, User)",
  })
  @IsInt()
  @IsNotEmpty()
  role_id: number;
}
