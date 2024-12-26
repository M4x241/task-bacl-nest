import { Injectable } from '@nestjs/common';
// import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

export interface typeuser {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'asdf',
      email: 'asfa',
      password: 'asfd',
    },
    {
      id: 2,
      name: 'asdfas',
      email: 'asdf',
      password: 'asdf',
    },
  ];
  addUser(user: any): typeuser {
    this.users.push(user);
    console.log('anadienod');
    return user;
  }

  delUser(num: any) {
    this.users = this.users.filter((item) => item.id != num);
    return 'Borrado';
  }

  getAllUser() {
    return this.users;
  }

  putUser(user: typeuser, index: number) {
    // ya se realiza la verificacion en el controller
    this.users[index] = user;
    return 'axtualizado';
  }
}
