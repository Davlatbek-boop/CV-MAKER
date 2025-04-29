import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";

interface IUserCreationAttr {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  password: string;
  about_text: string;
  role_id: number;
}

@Table({ tableName: "user" })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Unikal ID (avto-increment)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Salimov",
    description: "Foydalanuvchining ismi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare firstname: string;

  @ApiProperty({
    example: "Davlat",
    description: "Foydalanuvchining familiyasi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare lastname: string;

  @ApiProperty({
    example: "123 Main St",
    description: "Foydalanuvchining manzili",
  })
  @Column({
    type: DataType.STRING,
  })
  declare address: string;

  @ApiProperty({
    example: "Tashkent",
    description: "Foydalanuvchining shahri",
  })
  @Column({
    type: DataType.STRING,
  })
  declare city: string;

  @ApiProperty({
    example: "100000",
    description: "Foydalanuvchining pochta indeksi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare postcode: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Foydalanuvchining telefoni",
  })
  @Column({
    type: DataType.STRING,
  })
  declare phone: string;

  @ApiProperty({
    example: "user@example.com",
    description: "Foydalanuvchining emaili",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  declare email: string;

  @ApiProperty({
    example: "qwerty123",
    description: "Foydalanuvchining paroli (xashlangan)",
  })
  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @ApiProperty({
    example: "I am a software developer with experience in web development.",
    description: "Foydalanuvchining haqida matni",
  })
  @Column({
    type: DataType.STRING,
  })
  declare about_text: string;

  @ApiProperty({
    example: 1,
    description: "Foydalanuvchining roli (masalan, Admin, User)",
  })
  @ForeignKey(()=> Role)
  @Column({
    type: DataType.INTEGER,
  })
  declare role_id: number;

  @BelongsTo(()=> Role)
  role: Role
}
