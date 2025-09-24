import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseUserService } from './service/firebase.user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, FirebaseUserService, PrismaService, FirebaseService],
})
export class UserModule {}
