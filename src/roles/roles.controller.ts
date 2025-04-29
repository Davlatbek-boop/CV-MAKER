import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './models/role.model';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ApiOperation({ summary: 'Yangi rol yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Yangi rol muvaffaqiyatli yaratildi.',
    type: Role,
  })
  @ApiResponse({
    status: 400,
    description: 'Yaratishda xato',
  })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha rollarni olish' })
  @ApiResponse({
    status: 200,
    description: 'Barcha rollar muvaffaqiyatli olinadi.',
    type: [Role],
  })
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Id bo‘yicha rolni olish' })
  @ApiResponse({
    status: 200,
    description: 'Rol muvaffaqiyatli topildi',
    type: Role,
  })
  @ApiResponse({
    status: 404,
    description: 'Rol topilmadi',
  })
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Id bo‘yicha rolni yangilash' })
  @ApiResponse({
    status: 200,
    description: 'Rol muvaffaqiyatli yangilandi',
    type: Role,
  })
  @ApiResponse({
    status: 404,
    description: 'Rol topilmadi',
  })
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Id bo‘yicha rolni o‘chirish' })
  @ApiResponse({
    status: 200,
    description: 'Rol muvaffaqiyatli o‘chirildi',
  })
  @ApiResponse({
    status: 404,
    description: 'Rol topilmadi',
  })
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
