import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Gender } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Controller('user')
export class UserController {
  constructor( private readonly prisma: PrismaService) {}

 @Get('home')
async getOpponents(@Query('gender') gender: Gender) {
  return this.prisma.user.findMany({ where: { gender} });
}  
}
