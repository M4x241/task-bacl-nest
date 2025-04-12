import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

export interface typeuser {
  name: string;
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepositorio: Repository<User>,
  ) {}

  async createUser(data: typeuser): Promise<void> {
    const newUser = this.userRepositorio.create({
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
    });
    newUser.createdAt = new Date();
    await this.userRepositorio.insert(newUser);
    console.log('Se agrego correctamente');
  }
  async updateUser(id: number, user: any) {
    await this.userRepositorio.update(id, user);
    console.log('Actualizado');
  }

  async delUser(id: number) {
    await this.userRepositorio.delete(id);
    console.log('delete User');
  }

  async getAllUser() {
    console.log('revisando todos');
    return await this.userRepositorio.find();
  }

  async getUser(id: number) {
    console.log('revisando user');
    return await this.userRepositorio.findOne({ where: { id } });
  }
}
