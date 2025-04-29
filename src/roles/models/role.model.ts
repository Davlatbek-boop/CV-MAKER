import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";

interface IRolesCreationAttr {
  name: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRolesCreationAttr> {
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
    example: "ADMIN",
    description: "Foydalanuvchining roli (masalan, ADMIN, USER, va hokazo)",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;


  @HasMany(()=> User)
  user: User
}
