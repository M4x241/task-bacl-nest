import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { typeuser, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createData(@Body() data: any): Promise<void> {
    this.userService.createUser(data);
    console.log(data);
  }

  @Delete()
  delUser(@Query('id') id: number): any {
    return this.userService.delUser(id);
  }

  @Put()
  updateUser(@Body() serviceModel: typeuser, @Query('id') id: number): any {
    return this.userService.updateUser(id, serviceModel);
  }

  @Get(':id')
  getUser(@Param() params) {
    console.log('revisando');
    return this.userService.getUser(params.id);
  }

  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }
}
