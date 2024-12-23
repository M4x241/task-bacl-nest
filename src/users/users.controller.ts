import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
// aqui se puede implementar el constructor
  constructor(private userService: UsersService) {}
  @Post()
  addUser(data) {
    this.userService.addUser(data);
  }

  @Delete()
  delUser(num: any) {
    return this.userService.delUser(num);
  }
  @Put()
  updateUser() {
    return this.userService.putUser();
  }

  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }

//   @Get(':id')
//   getUser(Param('id'), id = any ){
//     return f("retornando userespecifico ${id}")
//   }
}
