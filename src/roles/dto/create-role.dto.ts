import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({
        example: "ADMIN",
        description: "Foydalanuvchining roli (masalan, ADMIN, USER, va hokazo)",
    })
    name: string
}
