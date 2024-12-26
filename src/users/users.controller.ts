import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { typeuser, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // aqui se puede implementar el constructor
  constructor(private userService: UsersService) {}
  @Post()
  addUser(@Body() user: typeuser) {
    console.log(user);
    console.log('entrando');
    return this.userService.addUser(user);
  }

  @Delete()
  delUser(@Query('id') id: number) {
    return this.userService.delUser(id);
  }

  @Put()
  updateUser(@Body() user: typeuser) {
    const userscopy = this.userService.getAllUser();
    const index = userscopy.findIndex((item) => item.id === user.id);
    if (index !== -1) {
      return this.userService.putUser(user, index);
    } else {
      return 'error de codigo';
    }
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
