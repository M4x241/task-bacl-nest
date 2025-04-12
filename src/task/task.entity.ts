import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity'; // Importa la entidad User

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  asunto: string;

  @Column()
  details: string;

  @ManyToOne(() => User, (user) => user.tasks) // Relación muchos a uno con User
  @JoinColumn({ name: 'user_id' }) // Columna como clave foránea
  user: User;
}
