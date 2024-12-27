import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './user.entity';
import { push, ref, set } from 'firebase/database';
// import { Repository } from 'typeorm';
import { firebaseDataBase } from 'src/firebase.config';
// import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

export interface typeuser {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  async createData(data: any): Promise<void> {
    const dataRef = ref(firebaseDataBase, 'Data');
    const newElementRef = push(dataRef, { dataRef: data });
    await set(newElementRef, data);
    console.log('Se creo exitosamente');
  }
  async addUser() {
    return 'hola';
  }

  delUser() {
    // this.users = this.users.filter((item) => item.id != num);
    return 'Borrado';
  }

  getAllUser() {
    return 'hop;';
  }

  putUser() {
    // ya se realiza la verificacion en el controller
    // this.users[index] = user;
    return 'axtualizado';
  }
}
