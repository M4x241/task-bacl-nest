import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { typeuser, UsersService } from './users.service';
import { stringify } from 'querystring';

@Controller('users')
export class UsersController {
  // aqui se puede implementar el constructor
  // constructor(private userService: UsersService) {}
  constructor(private readonly userService: UsersService) {}

  @Post('createData')
  async createData(@Body() data: any): Promise<void> {
    const datos = {
      nombre: stringify,
      edad: Number,
    };
    await this.userService.createData(data);
    console.log(datos);
  }
  @Post()
  addUser(@Body() user: typeuser) {
    console.log(user);
    console.log('entrando');
    // return this.userService.addUser(user);
    return 'hola';
  }

  @Delete()
  delUser() {
    // return this.userService.delUser(id);
    return 'hola';
  }

  @Put()
  updateUser() {
    // const userscopy = this.userService.getAllUser();
    // const index = userscopy.findIndex((item) => item.id === user.id);
    if (25 * 5 !== -1) {
      // return this.userService.putUser(user, index);
      return 'hola';
    } else {
      // return 'error de codigo';
      return 'hola';
    }
  }

  @Get()
  getAllUser() {
    // return this.userService.getAllUser();
    return 'hola';
  }

  //   @Get(':id')
  //   getUser(Param('id'), id = any ){
  //     return f("retornando userespecifico ${id}")
  //   }
}
